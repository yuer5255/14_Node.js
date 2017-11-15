//Thread.sleep(1000*5)  java中的函数，让程序睡眠一段时间
//让程序睡眠一段时间
function sleep(millis){
    let start = new Date();
    while(new Date()-start < millis){}
}

console.log(new Date().getSeconds());
sleep(1000 * 3)
console.log(new Date().getSeconds());
