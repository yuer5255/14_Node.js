//Thread.sleep(1000*5)  java�еĺ������ó���˯��һ��ʱ��
//�ó���˯��һ��ʱ��
function sleep(millis){
    let start = new Date();
    while(new Date()-start < millis){}
}

console.log(new Date().getSeconds());
sleep(1000 * 3)
console.log(new Date().getSeconds());
