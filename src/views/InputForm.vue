<template>
  <el-form
    label-position="right"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
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
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<style scoped></style>
