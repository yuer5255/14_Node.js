//引入fs模块
const fs = require('fs');
//读取文件
fs.readFile('test_buffer_read.txt',(err,data)=>{
    if(err) throw err;
    console.log(data);//输出buffer格式的文件内容
});
console.log(__dirname);//当前目录的绝对路径
console.log(__filename);//当前文件的绝对路径