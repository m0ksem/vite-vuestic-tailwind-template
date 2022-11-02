<script setup lang="ts">
import { ref } from 'vue'
import ThemeSwitchButton from './ThemeSwitchButton.vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="va-h1 text-center">{{ msg }}</h1>

  <div class="mt-4 pa-4 text-center">
    <div class="flex items-center justify-center gap-2">
      <va-button type="button" @click="count++">count is {{ count }}</va-button>
      <ThemeSwitchButton />
    </div>
    <p class="mt-4">
      Edit
      <code class="va-text-code text-success">components/HelloWorld.vue</code> to test HMR
    </p>
    <p class="text-secondary">Click on the Vite, Vue, Vuestic and Tailwind logos to learn more</p>
  </div>
</template>
