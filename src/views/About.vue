<!--
 * @Author: TYW
 * @Date: 2022-02-15 17:40:17
 * @LastEditTime: 2022-02-15 19:04:15
 * @LastEditors: TYW
 * @Description: 
-->
<template>
  <div class="about">about</div>
  <input type="text" v-model="store.helloWorld" />
  <button @click="setHData">About 按钮</button>
</template>

<script setup>
import { mainStore } from '../store/index';
const store = mainStore();
const setHData = () => {
  store.helloWorld = 'About Hello World !';
};
</script>

<style></style>
