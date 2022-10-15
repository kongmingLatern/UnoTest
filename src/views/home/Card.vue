<template>
  <div class="flex justify-between flex-wrap count">
    <el-col v-for="o in 5" :key="o">
      <el-card>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image" />
        <div>
          <span>Yummy hamburger</span>
          <div class="button">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped>
:deep(.el-row) {
  flex-wrap: unset;
}

@media only screen and (min-width: 375px) {
  :deep(.el-col-24) {
    flex: 1 0 50%;
  }
}

@media only screen and (min-width: 768px) {
  :deep(.el-col-24) {
    flex: 1 0 33%;
  }
}

@media only screen and (min-width: 960px) {
  :deep(.el-col-24) {
    flex: 1 0 25%;
  }

}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>

