<script setup lang="ts">
import { inject, type Ref } from "vue";
import coin from "~/assets/coin.png";
import Upgrade from "./clicker/Upgrade.vue";

const count = inject<Ref<number>>("count");

const click = async (ev: MouseEvent) => {
  if (!count) return;
  count.value++;

  const span = document.createElement("span");
  span.textContent = "+1";
  span.className = "button-click-span";
  span.style.top = ev.clientY + "px";
  span.style.left = ev.clientX + "px";
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
    <div>
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
    </div>
  </div>
  <div class="mt-8 flex-none rounded-xl bg-white p-1 shadow-md">
    <div
      class="h-full rounded-lg border-2 border-dashed border-neutral-200 p-6"
    >
      <div class="grid grid-cols-2 gap-3">
        <Upgrade name="cursor" />
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
