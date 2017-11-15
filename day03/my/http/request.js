/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');

let ip = '122.222.45.21';

let options = {
    protocal:'http',
    host:'ip.taobao.com',
    path:'/service/getIpInfo.php?ip='+ip
}
//发送请求
http.request(options,(res)=>{
    res.on('data',(buffer)=>{
        //JSON.parse将结果转换为中文，buffer.toString将buffer十六进制转为字符串
        console.log(JSON.parse(buffer.toString()));
    })
});
//必须加上，请求结束
request.end();