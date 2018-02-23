## 全局对象
 JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
 类似JS在浏览器中的window,document一样，在Node中，也有一类全局对象，名为global.
满足以下条件的变量是全局变量：

* 在最外层定义的变量；
* 全局对象的属性；
* 隐式定义的变量（未定义直接赋值的变量）

### 实例

|名称|说明|
|---|---|
|__filename|当前脚本绝对路径|
|__dirname|当前脚本目录|
|setTimeout(cb, ms)|设定一次执行定时器|
|clearTimeout(t)|清除Timeout定时器|
|setInterval(cb, ms)|设定循环执行定时器|
|setImmediate(cb)|设定异步执行|
|console|标准输出|
|process|描述当前进程状态|

### 非I/O异步API
诸如setTimeout(),setInterval(),setImmediate()和process.nextTick()
其区别和联系为:
* 两种定时器需要将事件插入观察者内部的红黑树中，执行时间不精确。
* nextTick()方法执行时间复杂度O(1),定时器使用红黑树数据结构，时间复杂度O(logN)
前者相比更高效。
* nextTick()属于idle观察者，setImmediate()属于check观察者。
在每一个轮询过程中，idle观察者先于I/O观察者，I/O观察者高于check()观察者。故而,nextTick()优先级更高。
