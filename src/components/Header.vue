<template>
  <header p-10 f-b-c dark:bg-gray-800 dark:text-gray-100>
    <div>
      <div flex="~" a-i-c>
        <div i-logos:vue mr-10 />
        <span text-lg>{{title}}</span>
      </div>
    </div>
    <div flex a-i-c>
      <div i-bi:moon-stars dark:i-bxs:sun cursor-pointer @click="toggle()" />
      <el-button ml-5 plain sm:text-sm lg:text-lg @click="$router.push(`${route}`)">
        {{text}}
      </el-button>
    </div>
  </header>
</template>

<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
const props = defineProps<{
  title?: string,
  text?: string,
  route?: string
}>()
const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<style scoped>

</style>