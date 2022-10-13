<template>
  <Header />
  <el-button @click="toggle()">
    切换主题
  </el-button>
</template>

<script lang="ts" setup>
import Header from './views/Header.vue';
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggle = useToggle(isDark)
</script>
