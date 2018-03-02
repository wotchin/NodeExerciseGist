/*
 * 程序说明:
 * 本程序演示了NodeJS 基于http模块的高性能web服务器实现
 * 经过测试,本程序的并发QPS可以达到10k.
 * 对比基于Java的线程池模型只可以达到3k左右.
 * */

var http = require('http');
var fs = require('fs');
var url = require('url');
var util = require('util');
var querystring = require('querystring');


var route = function(pathname,req,res){
  var rule = {
    "/receive":function(){
      //接受post内容
      var post = '';
      req.on('data',function(chunk){
        post += chunk;
      });

      req.on('end',function(){
        post = querystring.parse(post);
        //解析querystring
        console.log(post); 
        res.end("receive:\n" + util.inspect(post));
      });
    },
    "/time":function(){
      //返回当前系统时间 
      //一般GET请求,使用querystring解析query字符串为对象
      res.end(new Date().getTime().toString());
    }
  };
  
  return rule[pathname];
};
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   //console.log("Request for " + pathname + " received.");
   console.log("Request:\n" + util.inspect(url.parse(request.url),true));
  
   var action = route(pathname,request,response);
   //路由

   if((typeof action) === 'undefined'){
       fs.readFile(pathname.substr(1), function (err, data) {
         if (err) {
           console.log(err);
           // HTTP 状态码: 404 : NOT FOUND
           // Content Type: text/plain
           response.writeHead(404, {'Content-Type': 'text/html'});
         }else{             
           // HTTP 状态码: 200 : OK
           // Content Type: text/plain
           response.writeHead(200, {'Content-Type': 'text/html'});    

           // 响应文件内容
           response.write(data.toString());        

           //  发送响应数据
         }
           response.end();
       });
   } else{
       action();
   }
  }).listen(8080);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
