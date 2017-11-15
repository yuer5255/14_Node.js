/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//同步读取文件的整个内容，一直读到文件结尾
let data = fs.readFileSync(__filename);

console.log(data);//返回buffer
console.log(data.toString());//读取出文件内容

console.log('end..');


//异步读取文件  ,文件中输出语句的结果将在开始显示，异步返回的数据data在输出的语句后显示
//fs.readFile(__filename,(err,data)=>{
//    if(err) throw err;
//    console.log(data.toString());
//})
//console.log('end..');