// 引入http模块
const http= require('http');

// 创建服务,回调函数两个参数request，response
let server = http.createServer((req,res)=>{
    res.write('Hello Node.js');
    res.end('test...');
});

// 启动服务器，需要指定端口
server.listen('3000');