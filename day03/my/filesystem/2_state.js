/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

fs.stat(__filename,(err,stat)=>{
    if(err) throw err;
    console.log(stat);//返回类的实例
    console.log(stat.isFile());//是否是文件
})