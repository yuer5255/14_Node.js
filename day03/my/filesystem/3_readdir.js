/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');

//��ȡ�ļ�
fs.readdir(__dirname,(err,files)=>{
    if(err) throw err;
    console.log(files);//�����ļ���������
});

//����c���µ��ļ�
fs.readdir('c:/',(err,files)=>{
    if(err) throw err;
    console.log(files.length);//���ص�ǰ�ļ��������е��ļ�����
});

//��dos�����������tree���Բ鿴��ǰ�ļ����������ļ���Ŀ¼�ṹ�������ļ����е��ļ���