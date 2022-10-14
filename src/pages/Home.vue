<template>
  <!-- 头部 -->
  <Header title="信息管理平台" text="登录" route="/login" />
  <!-- 轮播图 -->
  <Carousel />
  <!-- 评论 -->
  <Card />
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Carousel from '@/views/home/Carousel.vue'
import Card from '@/views/home/Card.vue'
</script>
