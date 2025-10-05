<script setup lang="ts">
import { IconLock } from "@tabler/icons-vue";
import { inject, type Ref } from "vue";
import type { Category, MeepleState } from "~/lib/meeple";
import coin from "~/assets/coin.png";

const {
  name,
  category,
  pad = true,
} = defineProps<{
  name: keyof MeepleState;
  category: Category;
  pad?: boolean;
}>();

const count = inject<Ref<number>>("count");
const meeple = inject<Ref<MeepleState>>("meeple");
const unlocked = inject<Ref<string[]>>("unlocked");

if (!count) throw new Error("count not provided");
if (!meeple) throw new Error("meeple not provided");
if (!unlocked) throw new Error("unlocked not provided");

const purchaseCategory = () => {
  if (!category.price) return;
  if (count.value >= category.price) {
    count.value -= category.price;
    unlocked.value.push(name);
  }
};

const setItem = (key: string) => {
  if (name === "things") {
    const things = new Set(meeple.value.things.split(",").filter(Boolean));
    if (things.has(key)) {
      things.delete(key);
    } else {
      things.add(key);
    }
    meeple.value.things = Array.from(things).join(",");
  } else {
    meeple.value[name] = key;
  }
};
</script>

<template>
  <div class="relative flex flex-wrap gap-2">
    <button
      v-for="[key, item] in Object.entries(category.items)"
      :key="key"
      @click="() => setItem(key)"
      :class="[
        'size-14 flex-none rounded-md border border-neutral-200 bg-neutral-50',
        pad && 'p-2',
        meeple[name].includes(key) && 'ring-2 ring-amber-600 ring-offset-1',
      ]"
    >
      <img :src="item.src" :alt="item.label" class="size-full object-contain" />
    </button>
  </div>

  <div
    v-if="false && !unlocked.includes(name) && category.price"
    class="absolute inset-0 flex flex-col items-center bg-white/20 p-8 text-center backdrop-blur-sm"
  >
    <div
      class="flex h-8 items-center rounded-md border border-neutral-200 bg-neutral-50"
    >
      <div
        class="-ml-2 grid size-10 rotate-2 place-items-center rounded-md bg-neutral-300"
      >
        <IconLock class="size-6 text-neutral-700" />
      </div>
      <span class="px-2.5 pt-px text-sm">Locked</span>
    </div>

    <button
      @click="purchaseCategory"
      :disabled="count < (category.price || 0)"
      :class="[
        'group mt-4 flex h-12 items-center rounded-full px-4 text-white shadow-sm transition',
        count >= (category.price || 0)
          ? 'bg-amber-700 bg-gradient-to-br from-amber-600 to-amber-700 hover:scale-105 hover:from-amber-700'
          : 'bg-neutral-300',
      ]"
    >
      <img :src="coin" alt="" class="mr-2 size-6 group-disabled:grayscale" />
      <span class="text-lg font-semibold">{{ category.price }}</span>
    </button>
  </div>
</template>
