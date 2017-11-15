/**
 * Created by web-01 on 2017/11/14.
 */
const http = require('http');
const fs = require('fs');

let options = {
    host:'img.jandan.net',
    path:'',
    headers:{'User-Agent':'Mozilla/5.0'}//ģ��userAgent�û�����
}

let request = http.request(options,(res)=>{
    console.log(res.statusCode);//�������˷��ص�״̬��
    let data = "";
    res.setEncoding('binary');//����ͼ���ʽΪ�����Ƶ�
    res.on('data',(buffer)=>{
        //console.log(buffer);
        data += buffer;
    })
    res.on('end',()=>{
        //ͬʱ��ͼƬ��ʽ����Ϊ������
        fs.writeFile('./jandan.jpg',data,'binary',(err)=>{
            if(err) throw err;
            console.log('downloaded.');
        })
    })
})

request.end();
