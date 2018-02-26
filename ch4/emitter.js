/*
 * 演示Node中的发布订阅模式
 * 本程序演示的是发布订阅模式中的events模块的EventEmitter类的基本用法
 * */

//get an EventEmitter object
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function(arg1,arg2) {
  //使用emitter来响应接受到的消息,注册事件观察者
  console.log("event arg1:%s arg2:%s",arg1,arg2);
});
  /*
   * EventEmitter 对象的方法补充:
   * 除了有on()方法外，还有:
   * 1. once() 只响应一次事件:可以通过once()方法来解决 *事件雪崩* 问题
   * 2. addListener() 为指定事件添加一个监听器到监听器数组的尾部;
   * 3. removeListener(event,listener) 移出监听器
   * 4. listeners(event) 返回指定事件的监听器数组
   * 5. setMaxListeners(n) 默认监听器数量为10，突破系统默认设置
   * */


  //发送一次消息给事件观察者
setTimeout(function() { 
  var ret = event.emit('some_event',"hello","world"); 
  console.log("event.emit ret is " + ret);
  //返回true代表存在该事件主题,false代表不存在
}, 1000);


