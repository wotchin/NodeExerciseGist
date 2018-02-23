
var module = require("./myModule");//要使用相对或绝对路径
module.sayhi();//直接访问模块中exports对象的成员函数

var Hello = require("./myModule2");
var wotchin = new Hello();
wotchin.setContent("wotchin");
wotchin.say();

var gd = new Hello("gd");//无法通过这种方式传入构造函数
gd.say();


/*output:
sayHi
hello wotchin
hello undefined
* **/