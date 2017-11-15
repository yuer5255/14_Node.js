/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//读取文件
fs.readdir(__dirname,(err,files)=>{
    if(err) throw err;
    console.log(files);//返回文件名的数组
});

//返回c盘下的文件
fs.readdir('c:/',(err,files)=>{
    if(err) throw err;
    console.log(files.length);//返回当前文件夹下所有的文件个数
});

//在dos命令窗口下输入tree可以查看当前文件夹下所有文件的目录结构（包括文件夹中的文件）