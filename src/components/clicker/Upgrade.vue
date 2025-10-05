<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
import coin from "~/assets/coin.png";
import { upgrades } from "~/lib/upgrades";

const { name } = defineProps<{
  name: string;
}>();
const levels = upgrades[name]!;

const count = inject<Ref<number>>("count");
const currentUpgrades = inject<Ref<Record<string, number>>>("upgrades");

if (!count) throw new Error("count not provided");
if (!currentUpgrades) throw new Error("upgrades not provided");

const currentLevel = computed(() => {
  const current = currentUpgrades.value[name] || 0;
  if (current <= 0) return null;

  return levels[current - 1];
});
const nextLevel = computed(() => {
  const current = currentUpgrades.value[name] || 0;
  if (current >= levels.length) return null;

  return levels[current];
});

const purchase = () => {
  const current = currentUpgrades.value[name] || 0;
  if (current >= levels.length) return;
  if (!nextLevel.value) return;

  count.value -= nextLevel.value.cost;
  currentUpgrades.value[name] = current + 1;
};
</script>

<template>
  <div>
    <button
      @click="purchase"
      :disabled="!nextLevel || !count || count < nextLevel.cost"
      class="group relative w-full rounded-t-md border border-neutral-200 bg-neutral-50 p-4 text-left transition hover:border-neutral-300 hover:bg-neutral-200 disabled:border-neutral-200 disabled:bg-neutral-50 disabled:opacity-50"
    >
      <div class="absolute top-2 right-2 flex items-center gap-1">
        <img :src="coin" alt="" class="h-4 w-auto drop-shadow-sm" />
        <span
          :class="[
            'text-xs',
            (!count || (nextLevel && count < nextLevel.cost)) &&
              'font-medium text-red-700',
          ]"
        >
          {{ nextLevel?.cost || currentLevel?.cost }}
        </span>
      </div>
      <p
        :class="[
          'text-sm font-semibold',
          !nextLevel && 'group-disabled:line-through',
        ]"
      >
        {{ nextLevel?.name || currentLevel?.name }}
      </p>
      <p
        :class="[
          'mt-px text-xs text-neutral-600',
          !nextLevel && 'group-disabled:line-through',
        ]"
      >
        {{ nextLevel?.description || currentLevel?.description }}
      </p>
    </button>
    <div
      class="flex h-8 items-center rounded-b-md border border-t-0 border-neutral-200 bg-neutral-50 px-4 text-xs"
    >
      <p class="mr-1 font-semibold">now:</p>
      <p v-if="currentLevel" class="text-neutral-600">
        {{ currentLevel.activeDescription }}
      </p>
      <p v-else class="text-neutral-600">nothing :(</p>
    </div>
  </div>
</template>
