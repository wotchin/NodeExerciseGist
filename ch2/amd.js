//AMD写法防止污染全局变量
//但是 define() 方法需要引入requireJS依赖，否则会提示define没有定义
// require([module], callback);
define(function () {
    var exports = {};
    exports.sayHello = function () {
        console.log("hello");
    };
    return exports;
});