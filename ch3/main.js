
//显示文件和文件夹绝对路径
console.log("filename:%s\ndirname:%s",__filename,__dirname);

//只执行一次
setTimeout(function () {
    console.log("setTimeout");
},3000);

//闭包式的setInterval
(function () {
    var count = 0;
    var handle = null;
    handle = setInterval(function () {
        count += 1;
        if(count >= 3){//执行3次退出
            clearInterval(handle);
        }else{
            console.log("setInterval " + count);
        }
    },1000)
})();


//setImmediate优先级更低，虽然其先执行
setImmediate(function () {
    console.log("this comes from setImmediate()")
});

process.nextTick(function () {
    console.log("this comes from process.nextTick()")
});
