/*
 * @Author: TYW
 * @Date: 2022-02-16 16:24:23
 * @LastEditTime: 2022-02-16 17:05:50
 * @LastEditors: TYW
 * @Description:
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig, {
  mode: 'production'
});
