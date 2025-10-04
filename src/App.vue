<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Meeple from "./components/Meeple.vue";
</script>

<template>
  <div class="mx-auto max-w-4xl p-8">
    <Meeple />
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
