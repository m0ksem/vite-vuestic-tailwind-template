<template>
  <va-button @click="switchPreset" icon="dark_mode" color="secondary"></va-button>
</template>

<script setup lang="ts">
  import { useColors } from 'vuestic-ui'

  const { applyPreset, currentPresetName } = useColors()

  const isDarkTheme = Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

  applyPreset(isDarkTheme ? 'dark' : 'light')

  const switchPreset = () => {
    if (currentPresetName.value === 'light') {
      applyPreset('dark')
    } else {
      applyPreset('light')
    }
  }
</script>