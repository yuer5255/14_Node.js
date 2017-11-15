/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');

//创建一个server
//let server = http.createServer((req,res)=>{
//    res.end('server test...')
//});

let server = http.createServer();

server.on('request',(req,res)=>{
    console.log(req.url);//  返回 /
    console.log(req.httpVersion);
    console.log(req.headers);
    res.writeHead(200,'OK',{'Content-type':'text/html;charset=utf8'})
    res.end('测试中文');
})

//监听一个端口
server.listen('80');




