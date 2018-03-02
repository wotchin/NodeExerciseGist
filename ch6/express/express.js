/*
 * 其可以设置中间件来响应web请求,可以定义路由表,可以通过模板来渲染
 * */

var express = require('express');
var util = require('util');
var fs = require('fs');

var app = express();

var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use(express.static('public'));
//设置静态文件目录
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('file'));
//使用的一个中间件,用于文件上传时使用

app.get('/index.htm',function(req,res){
  res.sendFile( __dirname + "/index.htm");
});
//路由静态文件
app.get('/',function(req,res){
  res.send("Hello world");
});

app.get('/n*',function(req,res){
  res.send(req.path);
  //通配符
});

app.get('/time',function(req,res){
  res.send(new Date().getTime().toString());
});

app.get('/info',function(req,res){
  res.send('req:<br><textarea>' + util.inspect(req) + '</textarea><br><br>' + 'res:<br><textarea>' + 
          util.inspect(res) + '</textarea>');
});

app.post('/post',function(req,res){
  var data = '';
  //通过Stream对象获取POST内容
  req.on('data',function(chunk){
    data += chunk;
  });

  req.on('end',function(){
    res.send(data);
  });
});

app.post('/upload',function(req,res){
  //接受上传文件 
  console.log(req.files[0]);
  var response;
  var des = __dirname + "/public/upload/" + req.files[0].originalname;
  fs.readFile(req.files[0].path,function(err,data){
    fs.writeFile(des,data,function(err){
      if(err){
        console.log(err);
      }else{
         response  = "success";
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("服务启动: http://%s:%s",host,port);
});
