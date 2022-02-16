/*
 * @Author: TYW
 * @Date: 2022-02-15 18:06:50
 * @LastEditTime: 2022-02-15 18:13:24
 * @LastEditors: TYW
 * @Description: 
 */
import { defineStore } from 'pinia';

export const mainStore = defineStore('main', {
  state: () => {
    return {
      helloWorld: "Hello World !"
    }
  },
  getters: {},
  actions: {}
})