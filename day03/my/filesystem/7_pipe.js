/**
 * Created by web-01 on 2017/11/14.
 */
const  fs = require('fs');
//createReadStream����һ��readStream��
// �������з��� pipe
// pipe������������path�ļ�Ŀ�ĵأ��ص���

// exam���ڵ�ǰĿ¼�¸���һ���뵱ǰ�ļ�һ�����ļ�����Ϊwrite.txt
let reader = fs.createReadStream(__filename);

let writer = fs.createWriteStream('./write.txt');

reader.pipe(writer);

reader.on('end',()=>{
    console.log('copy down.');
})