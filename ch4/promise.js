/*
 * Promise/Deffered 模式演示demo
 * Promise操作只存在三种状态:未完成,完成和失败状态
 * 状态只能由未完成向其他两种状态转化，不能逆转
 * Promise 对象只需要具备then()方法即可,对于then()方法，有以下几点要求:
 *
 * 1. 接受完成态,错误态的回调方法
 * 2. then()方法只接受function对象
 * 3. then()方法继续返回Promise对象,以实现链式调用
 * 
 * 其定义如下:
 * then(fulfilledHandler,errorHandler,progressHandler)
 * */
var util = require("util");
var EventEmitter = require("events").EventEmitter;
var myPromise = function(){
  EventEmitter.call(this);
};
util.inherits(myPromise,EventEmitter);

myPromise.prototype.then = function(type,callback){

  /* 下述注释部分，是另一种then()函数的实现,其函数原型是:
   *
   * function(fulfilledHandler,errorHandler,processHandler)
   * */
//if((typeof fulfilledHandler) === 'function'){
//  this.once('success',fulfilledHandler);
//}
//if((typeof errorHandler) === 'function'){
//  this.once('error',errorHandler);
//}
//if((typeof processHandler) === 'function'){
//  this.once('progress',progressHandler);
//}
  //
  if((typeof callback) === 'function')
    {
      this.once(type,callback);
    }
  return this;//有点像builder模式
};

// then() 的作用主要是将回调函数存储起来,触发回调,实现功能的部分被称为Deffered


var myDeferred = function(){
  this.state = 'unfulfilled';
  this.promise = new myPromise();//实例化 Promise
};

myDeferred.prototype.resolve = function(obj){
  this.state = 'fulfilled';
  this.promise.emit('success',obj);
  // 完成状态
};

myDeferred.prototype.reject =  function(err){
  this.state = 'error';
  this.promise.emit('error',err);
  // 失败状态
};

myDeferred.prototype.progress = function(data){
  this.promise.emit('progress',data);
};

// 使用演示:
//
//

var deferred = new myDeferred();
deferred.promise
  .then('success',function(msg){console.log("suc " + msg);})
  .then('error',function(msg){console.log("err " + msg);})
  .then('progress',function(msg){console.log("prog " + msg);});

setTimeout(function(){
  var fs = require("fs");
  fs.readFile("input.txt",function(err,data){
    if(err){
      deferred.reject("file read failed!");
    }else{
      deferred.resolve(data);
    }

  });
},1000);
