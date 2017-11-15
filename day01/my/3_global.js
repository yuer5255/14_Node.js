//console.log(__dirname);
//console.log(__filename);

//var data = {id:3,count:36};
//console.log(`CONST IS :%d`,data.count);
//console.info(`CONST IS:${data.count}`);
//console.warn(`COUNT IS:${data.count}`);
//console.error(`COUNT IS:${data.count}`);
//console.trace('trace...');

let data = {id:3,count:36,list:[]};
//console.dir(data);
// assert 断言  ，如果语句为真，不输出，语句为假，输出
//console.assert(data.count>0,'count is zero...')
//console.assert(data.list.length>0,'no data in list...')


//
console.time('total time: ');
for(let i=0;i<1000;i++){
    //console.log(i);
}
console.timeEnd('total time: ');
