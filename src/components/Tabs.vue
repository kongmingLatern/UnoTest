<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane
      v-for="item in tabs"
      :key="item"
      :name="item.name"
    >
      <template #label>
        {{ item.title }}
      </template>
      {{ item.name }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const props = defineProps<{
  tabs: {
    title: string
    name: string
  }[]
}>()
const activeName = ref(props.tabs[0].name)

const handleClick = (
  tab: TabsPaneContext,
  event: Event
) => {
  // console.log(tab, event)
}
</script>
<style scoped>
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}

:deep(.el-tabs__content) {
  padding: 10px;
}
</style>
