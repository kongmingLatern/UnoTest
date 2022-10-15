<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" h-200 sm="h-200" md="h-250" lg="h-300">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl" lh-200 sm="lh-200" md="lh-250" lg="lh-300">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
