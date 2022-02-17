/*
 * @Author: TYW
 * @Date: 2022-02-16 17:34:27
 * @LastEditTime: 2022-02-16 18:14:23
 * @LastEditors: TYW
 * @Description:
 */
const express = require('express');
// const cors = require('cors');
//创建应用
const app = express();
// app.use(cors()); 
// 参数1： 接口地址
// 参数2：回调函数     req 请求报文       res 响应处理
app.get('/api/getList', (req, res) => {
  res.send({
    status: 0,
    message: '请求成功',
    data: [
      {
        id: 1,
        name: '张三',
        age: 18
      },
      {
        id: 2,
        name: '李四',
        age: 19
      },
      {
        id: 3,
        name: '王五',
        age: 20
      }
    ]
  });
});

// 开启服务
app.listen(666, () => {
  console.log('http://localhost:666');
});
