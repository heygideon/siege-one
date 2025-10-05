<script setup lang="ts">
import coin from "~/assets/coin.png";
import { inject, onMounted, onUnmounted, useTemplateRef, type Ref } from "vue";
import { upgrades as upgradesList } from "~/lib/upgrades";

const count = inject<Ref<number>>("count");
const currentUpgrades = inject<Ref<Record<string, number>>>("upgrades");

if (!count) throw new Error("No count provided");
if (!currentUpgrades) throw new Error("No upgrades provided");

const toastRef = useTemplateRef("count-toast");

let tickInterval: number;

onMounted(() => {
  tickInterval = window.setInterval(() => {
    let newCount = count.value;
    let toastIdx = 0;

    Object.entries(currentUpgrades.value).forEach(([key, level]) => {
      let oldCount = newCount;

      const levels = upgradesList[key];
      if (!levels) return;
      const currentLevel = levels[level - 1];
      if (!currentLevel) return;

      newCount = currentLevel.tick(newCount);

      if (Math.floor(oldCount) !== Math.floor(newCount)) {
        const coinsEl = toastRef.value;
        if (!coinsEl) return;

        const plusOne = document.createElement("span");
        plusOne.innerHTML = `<span>+${Math.floor(newCount) - Math.floor(oldCount)}</span> ${currentLevel.name}`;
        plusOne.className = "coin-add-span";
        plusOne.style.top = `calc(100% + ${toastIdx * 1.25}rem)`;
        plusOne.onanimationend = () => {
          plusOne.remove();
        };

        setTimeout(() => {
          coinsEl.append(plusOne);
        }, toastIdx * 50);
        toastIdx++;
      }
    });

    count.value = newCount;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(tickInterval);
});
</script>

<template>
  <div class="relative flex gap-1.5">
    <img :src="coin" alt="" class="h-8 drop-shadow-sm" />
    <span class="text-xl">{{ Math.floor(count) }}</span>

    <div ref="count-toast" class="contents"></div>
  </div>
</template>

<style>
@reference "../../style.css";

.coin-add-span {
  @apply pointer-events-none absolute top-full right-0 w-max text-right text-xs text-black/60;
  animation: coin-add-span 0.5s ease-out forwards;

  > span {
    @apply font-semibold text-black;
  }
}
@keyframes coin-add-span {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}
</style>
