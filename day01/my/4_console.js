//д���ļ�
//method2
const Console=  require('console').Console;
const fs = require('fs');

let out = fs.createWriteStream('out.log');
let err = fs.createWriteStream('err.log');
//ʹ��global�е�console�������Console,���Բ���Ҫ����console
//method1:
//var logger = new console.Console(out,err);
//method2��  ������console
var logger = new Console(out,err);

//������ļ�
logger.log('logger log new');
logger.error('logger error');