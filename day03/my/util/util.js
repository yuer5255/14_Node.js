/**
 * Created by web-01 on 2017/11/14.
 */
const util = require('util');
//判断是否是数组
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));//false  对象

//判断是否是日期
console.log(util.isDate(new Date()));
console.log(util.isDate('2017-11-14'));//字符串
console.log(util.isDate(new Date(123456789)));//日期毫秒数

//判断是否是正则表达式
console.log(util.isRegExp(new RegExp()));
console.log(util.isRegExp(/a/));
//邮箱正则
console.log(util.isRegExp(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2}$/));
console.log(util.isRegExp({}));//false


//判断是否是错误
console.log(util.isError(new Error));//true
console.log(util.isError(new TypeError));//true