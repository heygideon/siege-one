<script setup lang="ts">
import { IconLock } from "@tabler/icons-vue";
import { inject, ref, type Ref } from "vue";
import { type Category, type Item, type MeepleState } from "~/lib/meeple";
import coin from "~/assets/coin.png";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

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

const dialogOpen = ref(false);
const dialogItem = ref<{ key: string; item: Item } | null>(null);

const purchaseCategory = () => {
  if (!category.price) return;
  if (count.value >= category.price) {
    count.value -= category.price;
    unlocked.value.push(name);
  }
};
const purchaseItem = (key: string, item: Item) => {
  if (!item.price) return;
  if (count.value >= item.price) {
    count.value -= item.price;
    unlocked.value.push(`${name}:${key}`);

    if (name === "things") {
      meeple.value.things.push({ key });
    } else {
      meeple.value[name] = [{ key }];
    }
    dialogOpen.value = false;
  }
};

const setItem = (key: string, item: Item) => {
  if (item.price && !unlocked.value.includes(`${name}:${key}`)) {
    dialogItem.value = { key, item };
    dialogOpen.value = true;
    return;
  }

  if (name === "things") {
    if (meeple.value.things.find((t) => t.key === key)) {
      meeple.value.things = meeple.value.things.filter((t) => t.key !== key);
    } else {
      meeple.value.things.push({ key });
    }
  } else {
    meeple.value[name] = [{ key }];
  }
};
</script>

<template>
  <div class="relative flex flex-wrap gap-2">
    <button
      v-for="[key, item] in Object.entries(category.items)"
      :key="key"
      @click="() => setItem(key, item)"
      :class="[
        'relative size-14 flex-none rounded-md border border-neutral-200 bg-neutral-50',
        pad && 'p-2',
        meeple[name].find((v) => v.key === key) &&
          'ring-2 ring-amber-600 ring-offset-1',
      ]"
    >
      <img
        :src="item.src"
        :alt="item.label"
        :class="[
          'size-full object-contain',
          item.price && !unlocked.includes(`${name}:${key}`) && 'opacity-75',
        ]"
      />
      <div
        v-if="item.price && !unlocked.includes(`${name}:${key}`)"
        class="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full border border-neutral-200 bg-neutral-100"
      >
        <IconLock class="size-3 text-neutral-600" />
      </div>
    </button>
  </div>

  <div
    v-if="!unlocked.includes(name) && category.price"
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

  <Dialog
    :open="dialogOpen"
    @close="() => (dialogOpen = false)"
    class="relative z-50"
  >
    <div class="fixed inset-0 flex items-center justify-center bg-black/30">
      <DialogPanel
        class="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-8 text-center shadow-md"
      >
        <div
          class="size-24 rounded-lg border border-neutral-300 bg-neutral-50 p-4"
        >
          <img
            :src="dialogItem?.item.src"
            :alt="dialogItem?.item.label"
            class="size-full object-contain"
          />
        </div>
        <DialogTitle class="mt-4 text-xl font-semibold">
          Buy {{ dialogItem?.item.label }}
        </DialogTitle>

        <button
          @click="() => purchaseItem(dialogItem!.key, dialogItem!.item)"
          :disabled="count < (dialogItem!.item.price || 0)"
          :class="[
            'group mt-4 flex h-12 items-center rounded-full px-4 text-white shadow-sm transition',
            count >= (dialogItem!.item.price || 0)
              ? 'bg-amber-700 bg-gradient-to-br from-amber-600 to-amber-700 hover:scale-105 hover:from-amber-700'
              : 'bg-neutral-300',
          ]"
        >
          <img
            :src="coin"
            alt=""
            class="mr-2 size-6 group-disabled:grayscale"
          />
          <span class="text-lg font-semibold">{{
            dialogItem!.item.price
          }}</span>
        </button>
      </DialogPanel>
    </div>
  </Dialog>
</template>
