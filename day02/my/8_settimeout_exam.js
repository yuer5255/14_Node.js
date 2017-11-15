let start = Date.now();
setTimeout(()=>{
    //计算一下实际延时时间毫秒数,因为输出语句也是需要时间的，不会完全与延迟时间相等
    console.log(Date.now() - start);
},1000);
