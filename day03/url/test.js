const url = require('url');

let string = "http://tmooc.cn/web/index_new.html?tedu&k1=v1&k2=v2#anchor";

//转换为对象  protocol：协议名带着冒号
console.log(url.parse(string,true));
//第二个参数默认为false，修改为true可将对象中query属性转成对象格式
console.log(url.parse(string,true));


//反向转换为字符串
console.log(url.format(url.parse(string)));
