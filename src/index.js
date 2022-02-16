/*
 * @Author: TYW
 * @Date: 2022-02-15 15:31:36
 * @LastEditTime: 2022-02-15 17:56:35
 * @LastEditors: TYW
 * @Description: 
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");

