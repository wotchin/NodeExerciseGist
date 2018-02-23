
var fs = require("fs");
//同步读取文件:
var data = fs.readFileSync('input.txt');//synchronous
console.log(data.toString());
console.log("异步读取文件:");
//异步读取文件:
fs.readFile('input.txt', function (err, data) { //asynchronous
    if (err) return console.error(err);//callback function
    console.log(data.toString());
});

console.log("程序执行结束!");