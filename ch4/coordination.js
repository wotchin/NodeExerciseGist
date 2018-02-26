
/*
 * 本例子演示多异步响应之间的协作方法
 * */

/* 方法一: 哨兵变量
 * 多异步执行中，回调函数不能保证顺序，且不存在交集。
 * 需要通过第三方函数或变量来处理异步协作。
 * 在实际应用时，往往需要检测次数，用于检测次数的变量叫做哨兵变量。
 *
 * */

var after = function(times,callback){
  var count = 0,res = {};
  return function(key,value){
    //使用闭包和偏函数的写法
    res[key] = value;
    count++;
    if(count === times){
      callback(res);
    }
  };
};

var done = after(3,function(res){console.log(res);});
//执行三次之后,打印输出这个对象

setTimeout(function(){done("a",1);},1000);
setTimeout(function(){done("b",2);},1000);
setTimeout(function(){done("c",3);},1000);


/*
 * 方法二:发布/订阅模式
 * 使用Emitter，仍然使用带有哨兵变量的回调，可扩展性更强了。
 * */
var events = require("events");
var emitter = new events.EventEmitter();

var func = after(3,function(res){console.log("emitter:",res);});

var other = function(){
  console.log("other function");
};
emitter.on("func",func);


setTimeout(function(){
  emitter.emit("func","d",1);
},2000);


setTimeout(function(){
  emitter.emit("func","e",2);
},2000);


setTimeout(function(){
  emitter.emit("func","f",3);
},2000);


