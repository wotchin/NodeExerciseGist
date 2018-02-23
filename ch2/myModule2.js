
//导出一个可以经过实例化的对象
function Hello(init) {
    var content = init;
    this.setContent = function (content) {
        this.content = content;
    };
    this.say = function () {
        console.log("hello " + this.content)
    }
}

module.exports = Hello;
