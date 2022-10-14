<template>
  <header p-10 f-b-c dark:bg-gray-800 dark:text-gray-100>
    <div>
      <div flex="~" a-i-c>
        <div i-logos:vue mr-10 />
        <span text-lg>后台管理平台</span>
      </div>
    </div>
    <div flex a-i-c>
      <div i-bi:moon-stars dark:i-bxs:sun cursor-pointer @click="toggle()" />
      <el-button ml-5 w-80 plain sm:text-sm lg:text-lg @click="$router.push('/login')">
        退出登录
      </el-button>
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