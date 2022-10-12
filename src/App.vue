<template>
  <div>
    <el-radio-group v-model="labelPosition" label="label position">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px" />
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
    <el-button @click="toggle()">
      切换主题
    </el-button>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggle = useToggle(isDark)


const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
