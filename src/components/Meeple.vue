<script setup lang="ts">
import {
  IconCrown,
  IconEye,
  IconMoodSmile,
  IconPalette,
} from "@tabler/icons-vue";
import Tab from "./meeple/Tab.vue";

import { computed, inject, provide, type Ref, ref } from "vue";
import { colours, eyes, mouths, things, type MeepleState } from "~/lib/meeple";
import Category from "./meeple/Category.vue";

const tab = ref<keyof MeepleState>("colour");
provide("tab", tab);

const meeple = inject<Ref<MeepleState>>("meeple");
if (!meeple) throw new Error("meeple not provided");

const meepleThings = computed(() => {
  return meeple.value.things.split(",").filter(Boolean);
});

const colour = (key: string) => colours.items[key]!;
const eye = (key: string) => eyes.items[key]!;
const mouth = (key: string) => mouths.items[key]!;
const thing = (key: string) => things.items[key]!;
</script>

<template>
  <div class="relative isolate mx-auto mb-8 size-48 flex-none">
    <div
      class="absolute inset-0 -z-10 rotate-2 rounded-3xl bg-neutral-50/50"
    ></div>
    <img :src="colour(meeple.colour).src" alt="" class="size-full" />
    <img
      v-if="meeple.eyes"
      :src="eye(meeple.eyes).src"
      alt=""
      class="absolute top-16 left-19 h-3 w-auto translate-x-0.5"
    />
    <img
      v-if="meeple.mouth"
      :src="mouth(meeple.mouth).src"
      alt=""
      class="absolute top-19 left-21 h-4 w-auto translate-x-0.5"
    />
    <img
      v-for="t in meepleThings"
      :key="t"
      :src="thing(t).src"
      alt=""
      class="absolute w-auto translate-x-0.5"
      :style="{
        top: `${thing(t)._thing.y}px`,
        left: `${thing(t)._thing.x}px`,
        width: `${thing(t)._thing.w}px`,
        height: `${thing(t)._thing.h || thing(t)._thing.w}px`,
        rotate: `${thing(t)._thing.rotate}deg`,
      }"
    />
  </div>

  <div class="min-h-0 flex-1 rounded-xl bg-white p-1 shadow-md">
    <div
      class="flex h-full flex-col overflow-y-auto rounded-lg border-2 border-dashed border-neutral-200"
    >
      <div class="flex flex-none gap-0.5 px-6 pt-6">
        <Tab value="colour" :icon="IconPalette" label="Colour" />
        <Tab value="eyes" :icon="IconEye" label="Eyes" />
        <Tab value="mouth" :icon="IconMoodSmile" label="Mouth" />
        <Tab value="things" :icon="IconCrown" label="Accessories" />
      </div>

      <div class="relative min-h-0 flex-1">
        <div class="size-full overflow-y-auto p-6">
          <Category
            v-if="tab === 'colour'"
            name="colour"
            :category="colours"
            :pad="false"
          />
          <Category v-if="tab === 'eyes'" name="eyes" :category="eyes" />
          <Category v-if="tab === 'mouth'" name="mouth" :category="mouths" />
          <Category v-if="tab === 'things'" name="things" :category="things" />
        </div>

        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white"
        ></div>
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white"
        ></div>
      </div>
    </div>
  </div>
</template>
