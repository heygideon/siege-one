<script setup lang="ts">
import { IconMoodSmile, IconPalette } from "@tabler/icons-vue";
import meepleBlue from "~/assets/meeple-blue.png";
import meepleCyan from "~/assets/meeple-cyan.png";
import meepleOrange from "~/assets/meeple-orange.png";
import meepleYellow from "~/assets/meeple-yellow.png";
import Tab from "./meeple/Tab.vue";

import { provide, ref } from "vue";

let tab = ref("colour");

provide("tab", tab);
</script>

<template>
  <div class="relative isolate mx-auto size-48">
    <div
      class="absolute inset-0 -z-10 rotate-2 rounded-3xl bg-neutral-50/50"
    ></div>
    <div class="size-50">
      <img :src="meepleBlue" alt="" class="size-full" />
    </div>
  </div>

  <div class="mt-8 rounded-xl bg-white p-1 shadow-md">
    <div
      class="flex gap-0.5 rounded-lg border-2 border-dashed border-neutral-200 p-6"
    >
      <Tab
        currentValue="{tab}"
        value="colour"
        :icon="IconPalette"
        label="Colour"
      />
      <Tab
        currentValue="{tab}"
        value="face"
        :icon="IconMoodSmile"
        label="Face"
      />
    </div>
  </div>
</template>
