/**
 * Created by web-01 on 2017/11/14.
 */
const fs = require('fs');
const path = require('path');

//�첽д���ļ�  ���ɵ��ļ����Ķ���д������ݣ�����Ĵ���
fs.writeFile(path.join(__dirname,'test.txt'), 'data...',(err)=>{
    if(err) throw err;
});