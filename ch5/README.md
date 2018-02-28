## Buffer
Buffer是Node自带的一个模块，JS语言本身只支持字符串数据，没有二进制数据类型。但是诸如TCP流或文件流中，使用该类来创建一个专门存放二进制内容的缓冲区。

由于V8默认是有内存使用空间限制的，但是Buffer却使用了Node的堆外内存，不受此限制。

### Buffer编码
Buffer支持几种常用的编码方式，诸如:ascii,utf8,base64,hex等；

### Buffer常用方法

* 常规创建: alloc(size,[fill,[encoding]])
* 快速创建(返回陈旧数据): allocUnsafe(size)  allocUnsafeSlow(size)
* 由元素为数字的数组初始化: from(array)
* 从已有的buffer初始化: from(buffer)
* 由字符串初始化: from(string,[encoding])
* 写入内容: write(string,[offset,length,encoding])
* 读取内容: toString([encoding,start,end])
* 转换为JSON: toJSON()
* 缓冲区合并: concat(list,totalLength)
* 缓冲区比较: compare(otherBuffer)
* 拷贝缓冲区: copy(targetBuffer,[targetStart,sourceStart,sourceEnd])
* 缓冲区裁减: slice([start,end])
* 缓冲区长度: length
* 填充缓冲区: fill(value,[offset,end])
* 获取指定字节: buf[index]


