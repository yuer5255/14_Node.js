//ִ��˳��start...   end...   next tick...  set timeout...
//next tick ���ڵ�ǰ���е�ĩβ
//set timeout ������һ�����еĿ�ͷ
console.log('start ...');

setTimeout(()=>{
    console.log('set timeout...');
},0);

process.nextTick(()=>{
    console.log('next tick...');
})

console.log('end ...');
