//buffer  ������
let buff1 = new Buffer(2);//�ֽ�byte λbit
console.log(buff1);

let buff2 = new Buffer([65,66,767]);
console.log(buff2);

let buff3 = new Buffer('ABCD');
console.log(buff3);


let buff4 = Buffer.allocUnsafe(16);
console.log(buff4);


//����10���ֽڵĿռ�
let buff5 =  Buffer.alloc(10);
let s1 = 'AA';
let s2 = 'BB';
buff5.write(s1);
buff5.write(s2,2);//65 65 66 66 0 0 0 0 0 0

console.log(buff5.toString());
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding('base64'));


let buff6 = Buffer.from('���!');//Ĭ��һ������3���ֽ�
console.log(buff6.toString('base64'));//base64�������

console.log(buff6.length);

for(let i=0;i<buff5.length;i++){
    console.log(buff5[i]);
}