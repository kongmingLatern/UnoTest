<template>
  <Header title="登录" text="返回首页" route="/" />
  <div text-center pt-10>
    <div i-eva:arrow-ios-back-outline class="show"></div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef"></v-form-render>
    <el-button type="primary" @click="submitForm">登录</el-button>
    <el-button type="primary" @click="">注冊</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import Header from '@/components/Header.vue'
import router from '../router';

const formJson = reactive({
  widgetList: [
    {
      type: 'static-text',
      icon: 'static-text',
      formItemFlag: false,
      options: {
        name: 'statictext111193',
        columnWidth: '200px',
        hidden: false,
        textContent: '登录',
        customClass: [],
        onCreated: '',
        onMounted: '',
        label: 'static-text',
      },
      id: 'statictext111193',
    },
    {
      type: 'divider',
      icon: 'divider',
      formItemFlag: false,
      options: {
        name: 'divider102346',
        label: '',
        columnWidth: '200px',
        direction: 'horizontal',
        contentPosition: 'center',
        hidden: false,
        customClass: [],
        onCreated: '',
        onMounted: '',
      },
      id: 'divider102346',
    },
    {
      type: 'input',
      icon: 'text-field',
      formItemFlag: true,
      options: {
        name: 'username',
        label: '用户名',
        labelAlign: 'label-center-align',
        type: 'text',
        defaultValue: '',
        placeholder: '请输入用户名',
        columnWidth: '200px',
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        showPassword: false,
        required: true,
        validation: 'noChinese',
        validationHint: '请输入非中文字符',
        customClass: [],
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        minLength: 4,
        maxLength: 10,
        showWordLimit: false,
        appendButton: false,
        appendButtonDisabled: false,
        buttonIcon: 'el-icon-search',
        requiredHint: '请输入用户名',
      },
      id: 'input12931',
    },
    {
      key: 84391,
      type: 'input',
      icon: 'text-field',
      formItemFlag: true,
      options: {
        name: 'password',
        label: '密码',
        type: 'password', columnWidth: '200px',
        labelHidden: false,
        readonly: false,
        placeholder: '请输入密码',
        disabled: false,
        hidden: false,
        clearable: true,
        showPassword: true,
        required: true,
        requiredHint: '请输入密码',
        validation: 'noChinese',
        validationHint: '请输入5-10位密码',
        customClass: '',
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        minLength: 5,
        maxLength: 10,
        showWordLimit: false,
        appendButton: false,
        appendButtonDisabled: false,
        buttonIcon: 'custom-search',
      },
      id: 'input20992',
    },
    {
      key: 84391,
      type: 'input',
      icon: 'text-field',
      formItemFlag: true,
      options: {
        name: 'email',
        label: '电子邮箱',
        type: 'text',
        columnWidth: '200px',
        labelWidth: null,
        placeholder: '请输入电子邮箱',
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        showPassword: false,
        required: true,
        requiredHint: '请输入邮箱',
        validation: 'email',
        validationHint: '请输入正确的邮箱',
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        minLength: null,
        maxLength: null,
        showWordLimit: false,
        appendButton: false,
        appendButtonDisabled: false,
        buttonIcon: 'custom-search',
      },
      id: 'input97418',
    },
  ],
  formConfig: {
    modelName: 'formData',
    refName: 'vForm',
    rulesName: 'rules',
    labelWidth: 100,
    labelPosition: 'left',
    labelAlign: 'label-center-align',
    customClass: [],
    layoutType: 'H5',
    jsonVersion: 3,
  },
})
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)

const submitForm = () => {
  (vFormRef?.value as any)
    .getFormData()
    .then((formData: Record<string, any>) => {
      console.log(JSON.stringify(formData));
      JSON.stringify(formData)
      router.push('/back')
    })
    .catch((error: string) => {
      ElMessage.error('输入信息有误，请重新输入')
      vFormRef.value = null
    })
}
</script>

<style  scoped>
:deep(.static-content-item) {
  font-size: 20px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .show {
    display: none;
  }
}
</style>
