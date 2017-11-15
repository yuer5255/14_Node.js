let buffer = Buffer.from([1,2,3]);

//循环输出buffer中的每一个内容
// 输出十进制的
//method1:length
for(let i=0;i<buffer.length;i++){
    console.log(buffer[i]);
}

//method2:ES6 for of
for(let v of buffer){
    console.log(v);
}

//method3:keys()
for(let k of buffer.keys()){//k就是下标
    console.log(k + '->' + buffer[k]);//  0->1  1->2  2->3
}

//method4:values()
for(let v of buffer.values()){
    console.log(v);//该循环不能取到key   1  2  3
}

//method5:entyies()  直接返回键值对
for(let pair of buffer.entries()){
    console.log(pair);//[0,1] [1,2] [2,3]
}
