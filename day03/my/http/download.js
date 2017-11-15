/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');
const fs = require('fs');

let options = {
    host:'img.jandan.net',
    path:'',
    headers:{'User-Agent':'Mozilla/5.0'}//模拟userAgent用户代理
}

let request = http.request(options,(res)=>{
    console.log(res.statusCode);//服务器端返回的状态码
    let data = "";
    res.setEncoding('binary');//设置图标格式为二进制的
    res.on('data',(buffer)=>{
        //console.log(buffer);
        data += buffer;
    })
    res.on('end',()=>{
        //同时将图片格式设置为二进制
        fs.writeFile('./jandan.jpg',data,'binary',(err)=>{
            if(err) throw err;
            console.log('downloaded.');
        })
    })
})

request.end();
