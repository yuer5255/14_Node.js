// ����httpģ��
const http= require('http');

// ��������,�ص�������������request��response
let server = http.createServer((req,res)=>{
    res.write('Hello Node.js');
    res.end('test...');
});

// ��������������Ҫָ���˿�
server.listen('3000');