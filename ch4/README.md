## 异步编程
### 优势
事件驱动的非阻塞IO模型
### 难点
1. 异常捕获
由于异步编程难以通过try-catch即时捕获到，故而形成回调函数规约:

```
function(err,result){
  //TODO
  }
```
2. 函数嵌套过深
3. 阻塞代码
例如没有类似```sleep()```的函数，手写:

```
while(true){
  if(condition){
    break;
  }
}
```

这样的代码，又会造成回调阻塞，由于Node是单线程的，会严重影响性能。
4. 多线程编程
5. 异步转同步

### 难点的解决
解决Node的难点，主要是通过观察者模式来完成的，主要的方法有:

* 事件的发布／订阅模式
* Promise/Deferred 模式
* 流程控制库

### 文件说明

|文件名|说明|
|----|------|
|emitter.js|EventEmitter演示|
|inherits.js|演示js的继承机制|
|coordination.js|多异步响应的回调协调|
|promise.js|Promise/Deferred演示|


