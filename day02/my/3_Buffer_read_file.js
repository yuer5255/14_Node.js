//����fsģ��
const fs = require('fs');
//��ȡ�ļ�
fs.readFile('test_buffer_read.txt',(err,data)=>{
    if(err) throw err;
    console.log(data);//���buffer��ʽ���ļ�����
});
console.log(__dirname);//��ǰĿ¼�ľ���·��
console.log(__filename);//��ǰ�ļ��ľ���·��