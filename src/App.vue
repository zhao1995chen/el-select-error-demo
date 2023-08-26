<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
import { version as epVersion } from 'element-plus'
import { ElementPlus } from '@element-plus/icons-vue'
import Demo from './components/Demo.vue'
import Demo2 from './components/Demo2.vue'

const activeName = ref('demo')
</script>

<template>
  <h1>
    <el-icon color="var(--el-color-primary)"><ElementPlus /></el-icon>
    Element Plus {{ epVersion }} + Vue {{ vueVersion }}
  </h1>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Demo #14038" name="demo"><Demo /></el-tab-pane>
    <el-tab-pane label="Demo #13917" name="demo2"><Demo2 /></el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
