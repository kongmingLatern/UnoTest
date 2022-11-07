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
import { reactive } from 'vue'
import { Config } from '@/config'
const tabs = reactive(Config.tabs as any)
</script>
