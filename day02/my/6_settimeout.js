console.log('start ...');//1

//setTimeout(()=>{
//    console.log('set timeout ...');//2
//},1000);

setImmediate(()=>{
    console.log('set immediate...');//2
});

console.log('end ...');//3
