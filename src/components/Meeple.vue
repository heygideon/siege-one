<script setup lang="ts">
import { IconEye, IconMoodSmile, IconPalette } from "@tabler/icons-vue";
import Tab from "./meeple/Tab.vue";

import { inject, provide, type Ref, ref } from "vue";
import { colours, eyes, mouths, type MeepleState } from "~/lib/meeple";
import Category from "./meeple/Category.vue";

const tab = ref<keyof MeepleState>("colour");
provide("tab", tab);

const meeple = inject<Ref<MeepleState>>("meeple");
if (!meeple) throw new Error("meeple not provided");
</script>

<template>
  <div class="relative isolate mx-auto mb-8 size-48 flex-none">
    <div
      class="absolute inset-0 -z-10 rotate-2 rounded-3xl bg-neutral-50/50"
    ></div>
    <img
      v-if="colours.items[meeple.colour]"
      :src="colours.items[meeple.colour]!.src"
      alt=""
      class="size-full"
    />
    <img
      v-if="eyes.items[meeple.eyes]"
      :src="eyes.items[meeple.eyes]!.src"
      alt=""
      class="absolute top-16 left-19 h-3 w-auto translate-x-0.5"
    />
    <img
      v-if="mouths.items[meeple.mouth]"
      :src="mouths.items[meeple.mouth]!.src"
      alt=""
      class="absolute top-19 left-21 h-4 w-auto translate-x-0.5"
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
