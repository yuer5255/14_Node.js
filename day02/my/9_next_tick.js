//执行顺序：start...   end...   next tick...  set timeout...
//next tick 排在当前队列的末尾
//set timeout 排在下一个队列的开头
console.log('start ...');

setTimeout(()=>{
    console.log('set timeout...');
},0);

process.nextTick(()=>{
    console.log('next tick...');
})

console.log('end ...');
