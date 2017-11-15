/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');
const path = require('path');

//异步写入文件  生成的文件在哪儿，写入的内容，错误的处理
fs.writeFile(path.join(__dirname,'test.txt'), 'data...',(err)=>{
    if(err) throw err;
});