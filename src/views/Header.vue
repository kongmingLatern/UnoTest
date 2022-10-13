<template>
  <header p-5 flex="~" justify-between align-center>
    <div>
      <span>Vue</span>
    </div>
    <div @click="toggle()">
      <div i-bi:moon-stars dark:i-bxs:sun cursor-pointer hover: />
    </div>
  </header>
</template>

<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<style scoped>

</style>