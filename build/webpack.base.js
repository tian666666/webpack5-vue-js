/*
 * @Author: TYW
 * @Date: 2022-02-15 15:32:09
 * @LastEditTime: 2022-02-16 17:10:51
 * @LastEditors: TYW
 * @Description: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pathResolve = _path => path.resolve(__dirname,'../', _path);

module.exports = {
  entry: './src/index.js',
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:8][ext]"
        }
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
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    })
  ]
}