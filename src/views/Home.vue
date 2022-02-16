<!--
 * @Author: TYW
 * @Date: 2022-02-15 17:40:05
 * @LastEditTime: 2022-02-15 19:05:15
 * @LastEditors: TYW
 * @Description: 
-->
<template>
  <div class="home">home</div>
  <input type="text" v-model="store.helloWorld" />
  <button @click="setHData">Home 按钮</button>
</template>

<script setup>
import { mainStore } from '../store/index';
const store = mainStore();
const setHData = () => {
  store.helloWorld = 'Home Hello World !';
};
</script>

<style></style>
