/*
 * @Author: TYW
 * @Date: 2022-02-15 15:32:09
 * @LastEditTime: 2022-02-15 17:33:47
 * @LastEditors: TYW
 * @Description: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader'); 

const pathResolve = _path => path.resolve(__dirname, _path);

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    }
  },
  output: {
    path: pathResolve('dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('./public/index.html'),
      title: "vue test 20220215"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash:8].css'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}