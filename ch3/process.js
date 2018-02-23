
function println(shell) {
    var obj = eval(shell);
    if(typeof obj === "object"){//判断是否为对象
        console.log(shell + "  -obj->  \n" +JSON.stringify(obj))
    }else {
        console.log(shell + "  ->  "+ obj);
    }
}

process.on("SIGINT",function () {
   console.log("接受到 SIGINT!");
});// 注册信号接收器

process.on("beforeExit",function () {
   console.log("Node将要退出");
});// Node将要退出前执行

process.on("exit",function (err) {
   console.log("退出码:" + err);
});

process.on("uncaughtException",function (err) {
    console.log("捕获到异常退出:" + err);
});

//向进程发送信号
process.kill(process.pid,"SIGINT");

println("process.version");// version
println("process.argv");// argv
println("process.env");// 取得环境变量
println("process.pid");// 取得pid
println("process.arch");// 取得架构
println("process.title");// 进程标题
println("process.platform");// 取得平台

println("process.memoryUsage()");// 返回内存使用情况
println("process.uptime()");// 获取node执行到现在秒数
println("process.hrtime()");// 更加精确获取执行到现在的时间，格式  [seconds, nanoseconds]

