const url = require('url');

let string = "http://tmooc.cn/web/index_new.html?tedu&k1=v1&k2=v2#anchor";

//ת��Ϊ����  protocol��Э��������ð��
console.log(url.parse(string,true));
//�ڶ�������Ĭ��Ϊfalse���޸�Ϊtrue�ɽ�������query����ת�ɶ����ʽ
console.log(url.parse(string,true));


//����ת��Ϊ�ַ���
console.log(url.format(url.parse(string)));
