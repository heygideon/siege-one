<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import coin from "~/assets/coin.png";
import { upgrades } from "./lib/upgrades";

const count = ref(0);
provide("count", count);

const currentUpgrades = ref<Record<string, number>>({});
provide("upgrades", currentUpgrades);

let tickInterval: number;

onMounted(() => {
  const savedCount = localStorage.getItem("count");
  if (savedCount) {
    count.value = parseInt(savedCount, 10);
  }

  tickInterval = window.setInterval(() => {
    let newCount = count.value;
    Object.entries(currentUpgrades.value).forEach(([key, level]) => {
      const levels = upgrades[key];
      if (!levels) return;
      const currentLevel = levels[level - 1];
      if (!currentLevel) return;

      newCount = currentLevel.tick(newCount);
    });

    count.value = newCount;
  }, 1000);
});
watch(count, (newCount) => {
  localStorage.setItem("count", newCount.toString());
});
</script>

<template>
  <div class="mx-auto flex h-full max-w-4xl flex-col p-8">
    <nav class="mb-8 flex flex-none items-center gap-4">
      <div class="flex-1"></div>
      <div class="flex items-center gap-2">
        <RouterLink
          to="/"
          class="text-lg font-semibold text-black/60 hover:text-black"
          active-class="!text-amber-800 underline underline-offset-2 decoration-2"
        >
          Clicker
        </RouterLink>
        <RouterLink
          to="/meeple"
          class="text-lg font-semibold text-black/60 hover:text-black"
          active-class="!text-amber-800 underline underline-offset-2 decoration-2"
        >
          Meeple
        </RouterLink>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <img :src="coin" alt="" class="mr-1.5 h-8 drop-shadow-sm" />
        <span class="text-xl">{{ Math.floor(count) }}</span>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
