
/*
 * 本程序演示Node的Buffer模块的基本使用方法
 * */

var buf = Buffer.alloc(10,1);
console.log(buf);
//内容使用 0x01 填充

var buf1 = Buffer.allocUnsafe(10);
console.log(buf1.toString("hex"));//使用十六进制表示
console.log(buf1.length);
console.log(buf1.toString("hex"));//buffer读取出来数据后并没有被清空

var array = new Array();
array = [62,63,64,65,66];
//对应十六进制是 3e3f404142
var buf2 = Buffer.from(array);
console.log(buf2.toString("hex"));
//输出: 3e3f404142
console.log(buf2.toString("ascii"));
//输出: >?@AB，数字对应的ascii码

var str = "hello world";
var buf3 = Buffer.from(str);
console.log(buf3.toString());
//输出 hello world
var buf4 = Buffer.from(buf3);
buf4.write("y");
buf4.fill("w",5);
console.log(buf4.toString());
//输出 yellowwwwww

console.log(buf3.compare(buf3));
//0代表相等
console.log(buf3.toJSON());
console.log(buf3[0]);//104 ascii

console.log(buf3.slice(0,5).toString("ascii"));
//截取字符串
