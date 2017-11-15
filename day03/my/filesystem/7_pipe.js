/**
 * Created by web-01 on 2017/11/14.
 */
const  fs = require('fs');
//createReadStream返回一个readStream类
// 该类中有方法 pipe
// pipe的两个参数，path文件目的地；回调，

// exam：在当前目录下复制一个与当前文件一样的文件命名为write.txt
let reader = fs.createReadStream(__filename);

let writer = fs.createWriteStream('./write.txt');

reader.pipe(writer);

reader.on('end',()=>{
    console.log('copy down.');
})