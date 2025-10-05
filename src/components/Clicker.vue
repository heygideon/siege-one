<script setup lang="ts">
import { inject, type Ref } from "vue";
import coin from "~/assets/coin.png";

const count = inject<Ref<number>>("count");
</script>

<template>
  <div
    class="flex min-h-0 flex-1 flex-col items-center justify-center text-center"
  >
    <button @click="count!++" class="group">
      <img
        :src="coin"
        alt=""
        class="h-24 drop-shadow-sm transition group-hover:scale-105 group-hover:drop-shadow-md"
      />
    </button>
  </div>
</template>
