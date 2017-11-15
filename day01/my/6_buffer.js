//buffer  »º³åÇø
let buff1 = new Buffer(2);//×Ö½Úbyte Î»bit
console.log(buff1);

let buff2 = new Buffer([65,66,767]);
console.log(buff2);

let buff3 = new Buffer('ABCD');
console.log(buff3);


let buff4 = Buffer.allocUnsafe(16);
console.log(buff4);