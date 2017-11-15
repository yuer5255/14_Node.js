/**
 * Created by web-01 on 2017/11/14.
 */
/*вс╫ЬЁл*/
const cp = require('child_process');

cp.exec('mysql -uroot < ' + __dirname + '/scott.sql',(err,resuts,fields)=>{
    if(err) throw err;
})