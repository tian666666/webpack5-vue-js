<!--
 * @Author: TYW
 * @Date: 2022-02-15 17:40:17
 * @LastEditTime: 2022-02-16 14:52:48
 * @LastEditors: TYW
 * @Description: 
-->
<template>
  <div class="about">
    <div>about</div>
    <input type="text" v-model="store.helloWorld" />
    <button @click="setHData">About 按钮</button>
    <div>
      <div>图片</div>
      <div class="image-bg-earth"></div>
      <div>图标字体</div>
      <i class="iconfont icon-xiaoyu"></i>
      <div>SVG</div>
      <div class="image-bg-svg"></div>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from '../store/index';
const store = mainStore();
const setHData = () => {
  store.helloWorld = 'About Hello World !';
};
</script>

<style scoped>
@import "../resource/css/image.css"; 
@import "../resource/font/iconfont.css"; 
</style>
