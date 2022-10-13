<template>
  <header p-10 flex="~" justify-between items-center dark:bg-gray-800 dark:text-gray-100>
    <div>
      <div flex="~" items-center>
        <div i-logos:vue mr-10 />
        <span text-sm>信息查询平台</span>
      </div>
    </div>
    <div @click="toggle()">
      <div i-bi:moon-stars dark:i-bxs:sun cursor-pointer />
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