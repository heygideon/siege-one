<script setup lang="ts">
import { IconEye, IconMoodSmile, IconPalette } from "@tabler/icons-vue";
import Tab from "./meeple/Tab.vue";

import { provide, ref } from "vue";
import { colours, eyes, mouths } from "~/lib/meeple";

const tab = ref("colour");
provide("tab", tab);

const meeple = ref({
  colour: "blue",
  eyes: "",
  mouth: "",
});
</script>

<template>
  <div class="relative isolate mx-auto mb-8 size-48 flex-none">
    <div
      class="absolute inset-0 -z-10 rotate-2 rounded-3xl bg-neutral-50/50"
    ></div>
    <img
      v-if="colours[meeple.colour]"
      :src="colours[meeple.colour]?.src"
      alt=""
      class="size-full"
    />
    <img
      v-if="eyes[meeple.eyes]"
      :src="eyes[meeple.eyes]?.src"
      alt=""
      class="absolute top-16 left-19 h-3 w-auto translate-x-0.5"
    />
    <img
      v-if="mouths[meeple.mouth]"
      :src="mouths[meeple.mouth]?.src"
      alt=""
      class="absolute top-19 left-21 h-4 w-auto translate-x-0.5"
    />
  </div>

  <div class="min-h-0 flex-1 rounded-xl bg-white p-1 shadow-md">
    <div
      class="h-full rounded-lg border-2 border-dashed border-neutral-200 p-6"
    >
      <div class="flex gap-0.5">
        <Tab value="colour" :icon="IconPalette" label="Colour" />
        <Tab value="eyes" :icon="IconEye" label="Eyes" />
        <Tab value="mouths" :icon="IconMoodSmile" label="Mouth" />
      </div>

      <div class="mt-4">
        <div v-if="tab === 'colour'" class="flex flex-wrap gap-2">
          <button
            v-for="[key, colour] in Object.entries(colours)"
            :key="key"
            @click="meeple.colour = key"
            :class="[
              'size-14 flex-none rounded-md border border-neutral-200 bg-neutral-50',
              meeple.colour === key && 'ring-2 ring-amber-600 ring-offset-1',
            ]"
          >
            <img :src="colour.src" :alt="colour.label" class="size-full" />
          </button>
        </div>
        <div v-if="tab === 'eyes'" class="flex flex-wrap gap-2">
          <button
            v-for="[key, eyes] in Object.entries(eyes)"
            :key="key"
            @click="meeple.eyes = key"
            :class="[
              'size-14 flex-none rounded-md border border-neutral-200 bg-neutral-50 px-2',
              meeple.eyes === key && 'ring-2 ring-amber-600 ring-offset-1',
            ]"
          >
            <img :src="eyes.src" :alt="eyes.label" class="h-auto w-full" />
          </button>
        </div>
        <div v-if="tab === 'mouths'" class="flex flex-wrap gap-2">
          <button
            v-for="[key, mouth] in Object.entries(mouths)"
            :key="key"
            @click="meeple.mouth = key"
            :class="[
              'size-14 flex-none rounded-md border border-neutral-200 bg-neutral-50 px-2',
              meeple.mouth === key && 'ring-2 ring-amber-600 ring-offset-1',
            ]"
          >
            <img :src="mouth.src" :alt="mouth.label" class="h-auto w-full" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
