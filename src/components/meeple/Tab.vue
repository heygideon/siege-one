<script setup lang="ts">
import type { Icon as IconType } from "@tabler/icons-vue";
import { inject, type Ref } from "vue";

let { value, icon, label } = defineProps<{
  value: string;
  icon: IconType;
  label: string;
}>();

const currentValue = inject<Ref<string>>("tab");
</script>

<template>
  <button
    @click="currentValue = value"
    :class="[
      'relative isolate flex items-center overflow-clip rounded-sm p-1 px-2 transition',
      currentValue === value
        ? 'text-amber-800'
        : 'text-neutral-500 hover:bg-neutral-100',
    ]"
  >
    <div
      :class="[
        'absolute inset-0 -z-10 bg-radial from-amber-200 to-amber-300 transition-opacity',
        currentValue !== value && 'opacity-0',
      ]"
    ></div>
    <component :is="icon" class="size-5 flex-none" />
    <div
      :class="[
        'overflow-hidden transition-[width] [interpolate-size:allow-keywords]',
        currentValue === value ? 'w-auto' : 'w-0',
      ]"
    >
      <span class="pl-1.5 font-semibold">{{ label }}</span>
    </div>
  </button>
</template>
