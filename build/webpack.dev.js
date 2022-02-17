/*
 * @Author: TYW
 * @Date: 2022-02-15 15:32:09
 * @LastEditTime: 2022-02-16 18:34:15
 * @LastEditors: TYW
 * @Description:
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
    proxy: {
      // "/api": "http://localhost:666"
    }
  }
});
