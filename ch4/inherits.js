/*
 * 本程序演示一个继承EventEmitter类的方法
 * */

var obj = (function(){
  var events = require("events");
  var util = require("util");

  function Stream(){
    events.EventEmitter.call(this);
    //定一个一个名为Stream的对象 
  }

  util.inherits(Stream,events.EventEmitter);
  // 实现 Stream 类继承自 events.EventEmitter 

  Stream.prototype.print = function(text){
    console.log(text);
  }; 
return Stream;
})();

/*
 * 使用obj来返回一个类，这是通过闭包来实现的
 * 这里将Stream类继承自EventEmitter类
 * */

var o = new obj();
// 使用prototype 来定义的对象，要通过new 来实例化

o.print("hello");
//使用定义的print()函数来输出hello字符串

o.once("msg",function(msg){
  console.log("the object o has msg :" + msg);
});
//由于对象o是Stream类，而这个类继承自EventEmitter类，使用继承来的方法来完成事件的响应。
o.emit("msg","hello world");
