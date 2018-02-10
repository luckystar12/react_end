# react_end
React 对应的 NodeJs 后台

## 搭建环境

npm init 初始化一个项目

安装依赖 npm install express(mongoose)等

新建 index.js, 写个 demo

```
var express = require('express');

var app = express();

app.listen(3002, function(res) {
  console.log('hi, 请打开浏览器 localhost:3002 进行测试');
});
```

新建一个测试 mongoose 的 demo

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_test');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title:  String,
});
var Blog = mongoose.model('Blog', blogSchema);
var blog = new Blog({title:'xxx'});
blog.save();
```
