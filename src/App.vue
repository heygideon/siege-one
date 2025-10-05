<script setup lang="ts">
import { provide } from "vue";
import Count from "./components/clicker/Count.vue";
import type { MeepleState } from "./lib/meeple";
import { useStorage } from "@vueuse/core";
import { IconCornerDownRight } from "@tabler/icons-vue";

const count = useStorage("coins", 0);
provide("count", count);

const currentUpgrades = useStorage<Record<string, number>>("upgrades", {});
provide("upgrades", currentUpgrades);

const meeple = useStorage<MeepleState>("meeple-state", {
  colour: [{ key: "blue" }],
  eyes: [{ key: "" }],
  mouth: [{ key: "" }],
  things: [],
});
provide("meeple", meeple);

const unlocked = useStorage<string[]>("meeple-unlocked", []);
provide("unlocked", unlocked);

const showTutorialMeepleTab = useStorage("tutorial-meeple-1", true);
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
          @click="
            () => {
              if (count >= 200) showTutorialMeepleTab = false;
            }
          "
          class="relative text-lg font-semibold text-black/60 hover:text-black"
          active-class="!text-amber-800 underline underline-offset-2 decoration-2"
        >
          Meeple

          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <div
              v-if="count >= 200 && showTutorialMeepleTab"
              class="absolute top-0 -right-1 size-2 rounded-full bg-red-600"
            >
              <div
                class="absolute inset-0 size-2 animate-ping rounded-full bg-red-600"
              ></div>
            </div>
          </Transition>
          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <p
              v-if="count >= 200 && showTutorialMeepleTab"
              class="pointer-events-none absolute top-full left-2 flex w-max items-center gap-0.5 text-xs text-red-700 italic"
            >
              <IconCornerDownRight class="size-3" />
              <span>Customise your meeple!</span>
            </p>
          </Transition>
        </RouterLink>
      </div>
      <div class="flex flex-1 items-center justify-end">
        <Count />
      </div>
    </nav>
    <RouterView />
  </div>
</template>
