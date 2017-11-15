//写入文件
//method2
const Console=  require('console').Console;
const fs = require('fs');

let out = fs.createWriteStream('out.log');
let err = fs.createWriteStream('err.log');
//使用global中的console对象调用Console,所以不需要引入console
//method1:
//var logger = new console.Console(out,err);
//method2：  先引入console
var logger = new Console(out,err);

//输出到文件
logger.log('logger log new');
logger.error('logger error');