let buffer = Buffer.from([1,2,3]);

//ѭ�����buffer�е�ÿһ������
// ���ʮ���Ƶ�
//method1:length
for(let i=0;i<buffer.length;i++){
    console.log(buffer[i]);
}

//method2:ES6 for of
for(let v of buffer){
    console.log(v);
}

//method3:keys()
for(let k of buffer.keys()){//k�����±�
    console.log(k + '->' + buffer[k]);//  0->1  1->2  2->3
}

//method4:values()
for(let v of buffer.values()){
    console.log(v);//��ѭ������ȡ��key   1  2  3
}

//method5:entyies()  ֱ�ӷ��ؼ�ֵ��
for(let pair of buffer.entries()){
    console.log(pair);//[0,1] [1,2] [2,3]
}
