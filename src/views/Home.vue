<!--
 * @Author: TYW
 * @Date: 2022-02-15 17:40:05
 * @LastEditTime: 2022-02-16 19:07:07
 * @LastEditors: TYW
 * @Description: 
-->
<template>
  <div class="home">
    <div>home</div>
    <input type="text" v-model="store.helloWorld" />
    <button @click="setHData">Home 按钮</button>
    <button @click="setError">Home 异常按钮</button>
    <button @click="getServer">Home 请求服务</button>
    <button @click="getMath">Home Math计算</button>
    <button @click="getMath2">Home Math计算2</button>
  </div>
</template>

<script setup>
import { mainStore } from '../store/index';
import { mathTianKK } from '../utils/math2';
import axios from 'axios';
const store = mainStore();
const setHData = () => {
  store.helloWorld = 'Home Hello World !';
};
const setError = () => {
  console.log(content.length);
};
const getServer = () => {
  axios
    .get('http://192.168.1.228:30217/main/smart3d/rest/implement/v1/project/all?type=0') // http://192.168.1.228:30217/main/smart3d/rest/implement/v1/project/all?type=0
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
const getMath = () => {
  import("../utils/math").then(res => {
    console.log(res.sumTian(20,30));
  })
}
const getMath2 = () => {
  console.log(mathTianKK(20,30));
}
 </script>

<style></style>
