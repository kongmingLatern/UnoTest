<template>
  <!-- 头部 -->
  <Header
    title="后台管理平台"
    text="退出登录"
    route="/login"
  />
  <Tabs :tabs="tabs" />
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Tabs from '@/components/Tabs.vue'
import '../tabs.config'
import { reactive } from 'vue'
const tabs = reactive([
  {
    title: '用户管理',
    name: 'user',
  },
  {
    title: '角色管理',
    name: 'role',
  },
])
// console.log(backConfig)
</script>
