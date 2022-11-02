<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex items-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vuestic.dev/" target="_blank">
      <img src="./assets/vuestic.png" class="logo vuestic" alt="Vuestic logo" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="./assets/tailwind.svg" class="logo tailwind" alt="Tailwind logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Vuestic + Tailwind" />
</template>

<style>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.vuestic {
  height: 10.8rem;
}
.logo.vuestic:hover {
  filter: drop-shadow(0 0 2em var(--va-primary));
}
.logo.tailwind:hover {
  filter: drop-shadow(0 0 2em #48adb4);
}
</style>
