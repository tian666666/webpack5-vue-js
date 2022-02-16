/*
 * @Author: TYW
 * @Date: 2022-02-15 17:38:09
 * @LastEditTime: 2022-02-15 17:57:53
 * @LastEditors: TYW
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})