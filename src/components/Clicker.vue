<script setup lang="ts">
import { inject, type Ref } from "vue";
import coin from "~/assets/coin.png";
import Upgrade from "./clicker/Upgrade.vue";
import { useStorage } from "@vueuse/core";

const count = inject<Ref<number>>("count");
const upgrades = inject<Ref<Record<string, number>>>("upgrades");

if (!count) throw new Error("count not provided");
if (!upgrades) throw new Error("upgrades not provided");

const showTutorialClick = useStorage("tutorial-click-1", true);
const showTutorialClickMore = useStorage("tutorial-click-2", true);
const showTutorialClickKeep = useStorage("tutorial-click-3", true);

const varyPosition = (n: number) => {
  return n + (Math.random() * 8 - 4);
};
const click = async (ev: MouseEvent) => {
  const exponent = upgrades.value.mouse || 0;
  const inc = 2 ** exponent;
  count.value += inc;

  if (count.value >= 10) showTutorialClick.value = false;
  if (count.value >= 30) showTutorialClickMore.value = false;
  if (count.value >= 60) showTutorialClickKeep.value = false;

  const span = document.createElement("span");
  span.textContent = `+${inc}`;
  span.className = "button-click-span";
  span.style.top = varyPosition(ev.clientY) + "px";
  span.style.left = varyPosition(ev.clientX) + "px";
  span.onanimationend = () => {
    span.remove();
  };
  document.body.appendChild(span);
};
</script>

<template>
  <div
    class="flex min-h-0 flex-1 flex-col items-center justify-center text-center"
  >
    <div class="relative">
      <button
        @click="click"
        class="group grid size-32 place-items-center rounded-full"
      >
        <img
          :src="coin"
          alt=""
          class="pointer-events-none w-32 drop-shadow-sm transition group-hover:scale-125 group-hover:drop-shadow-md group-active:scale-100"
        />
      </button>
      <Transition
        mode="out-in"
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <p
          v-if="showTutorialClick"
          class="absolute inset-x-0 top-full mt-4 text-center text-sm"
        >
          click the coin
        </p>
        <p
          v-else-if="showTutorialClickMore"
          class="absolute inset-x-0 top-full mt-4 text-center text-sm"
        >
          click some more!
        </p>
        <p
          v-else-if="showTutorialClickKeep"
          class="absolute inset-x-0 top-full mt-4 text-center text-sm"
        >
          keep clicking!
        </p>
      </Transition>
    </div>
  </div>
  <div
    :class="[
      'ease-in-out-expo mt-8 flex-none rounded-xl bg-white p-1 shadow-md transition duration-750',
      showTutorialClickKeep && 'translate-y-full opacity-0',
    ]"
  >
    <div
      class="h-full rounded-lg border-2 border-dashed border-neutral-200 p-6"
    >
      <div class="grid grid-cols-2 gap-3">
        <Upgrade name="cursor" />
        <Upgrade name="mouse" />
        <Upgrade name="orchard" />
        <Upgrade name="bank" />
      </div>
    </div>
  </div>
</template>

<style>
@reference "../style.css";

.button-click-span {
  @apply pointer-events-none fixed text-lg font-semibold text-amber-700;
  animation: button-click-span 0.5s ease-out forwards;
}
@keyframes button-click-span {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-2rem) scale(1.5);
  }
}
</style>
