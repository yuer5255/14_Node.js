/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//ͬ����ȡ�ļ����������ݣ�һֱ�����ļ���β
let data = fs.readFileSync(__filename);

console.log(data);//����buffer
console.log(data.toString());//��ȡ���ļ�����

console.log('end..');


//�첽��ȡ�ļ�  ,�ļ���������Ľ�����ڿ�ʼ��ʾ���첽���ص�����data�������������ʾ
//fs.readFile(__filename,(err,data)=>{
//    if(err) throw err;
//    console.log(data.toString());
//})
//console.log('end..');