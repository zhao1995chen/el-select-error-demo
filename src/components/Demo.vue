<script setup lang="ts">
import { ref, reactive } from 'vue'

type Size = 'small' | 'default' | 'large'
const size = ref<Size>('default')

const form = reactive({
  region: '',
})

/** The following is the setting I put in src/assets/index.scss
@use 'sass:map';
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $common-component-size: (
    'large': 50px,
    'default': 30px,
    'small': 10px,
  ),
);
*/
</script>

<template>
  <p>COMPONENT OPTIONS</p>
  <el-form label-width="80px">
    <el-form-item label="Size" class="flex items-center">
      <el-radio-group v-model="size">
        <el-radio label="small">Small</el-radio>
        <el-radio label="default">Default</el-radio>
        <el-radio label="large">Large</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
  <el-divider></el-divider>
  <p>Give size by el-form.</p>
  <el-form :model="form" label-width="160px" :size="size">
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
  </el-form>
  <el-divider></el-divider>
  <p>Give size by el-form-item.</p>
  <el-form-item label="Activity zone" :size="size">
    <el-select v-model="form.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>
  <el-divider></el-divider>
  <p>Give size by el-select.</p>
  <el-select
    v-model="form.region"
    placeholder="please select your zone"
    :size="size"
  >
    <el-option label="Zone one" value="shanghai" />
    <el-option label="Zone two" value="beijing" />
  </el-select>
</template>
