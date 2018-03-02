/*
 * 本程序是使用Node实现的一个爬虫
 * 在阅读本程序前,请先阅读 client.js 文件
 * */

var http = require('http');

var callback = function(res){
  var content = '';
  res.on('data',function(data){
    content += data;
  });
  res.on('end',function(){
    var select = require('xpath.js');
    var dom = require('xmldom').DOMParser;

    var doc = new dom().parseFromString(content);
    var nodes = select(doc,"//*");
    //使用xpath来解析xml
    console.log(nodes);
  });
};

var req = http.request("http://blog.csdn.net/wang7807564",callback);
req.end();

