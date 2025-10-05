<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import Count from "./components/clicker/Count.vue";
import type { MeepleState } from "./lib/meeple";

const count = ref(0);
provide("count", count);

const currentUpgrades = ref<Record<string, number>>({});
provide("upgrades", currentUpgrades);

const meeple = ref<MeepleState>({
  colour: [{ key: "blue" }],
  eyes: [{ key: "" }],
  mouth: [{ key: "" }],
  things: [],
});
provide("meeple", meeple);

const unlocked = ref<string[]>([]);
provide("unlocked", unlocked);

onMounted(() => {
  const savedCount = localStorage.getItem("count");
  if (savedCount) {
    count.value = Number(savedCount);
  }
});
watch(count, (newCount) => {
  localStorage.setItem("count", newCount.toFixed(1));
});
</script>

<template>
  <div class="mx-auto flex h-full max-w-4xl flex-col p-8">
    <nav class="mb-8 flex flex-none items-center gap-8">
      <div class="flex-1"></div>
      <div class="flex items-center gap-3">
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
        <Count />
      </div>
    </nav>
    <RouterView />
  </div>
</template>
