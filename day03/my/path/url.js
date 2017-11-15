/**
 * Created by web-01 on 2017/11/14.
 */
const path = require('path');

console.log(path.normalize('/test1//test2'));//\test1\test2

//采用join方法，拼接时会自动添加/  且可以识别../返回上一级目录
console.log(path.join(__dirname,'../test1/test2','test3'));

//返回当前目录的绝对路径
console.log(path.resolve('./url.js'));

//是否是绝对路径  返回true
console.log(path.isAbsolute(__filename));

//extname  文件扩展名 带着 点    返回.js
console.log(path.extname(__filename));
