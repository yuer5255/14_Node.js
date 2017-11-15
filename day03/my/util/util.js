/**
 * Created by web-01 on 2017/11/14.
 */
const util = require('util');
//�ж��Ƿ�������
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));//false  ����

//�ж��Ƿ�������
console.log(util.isDate(new Date()));
console.log(util.isDate('2017-11-14'));//�ַ���
console.log(util.isDate(new Date(123456789)));//���ں�����

//�ж��Ƿ���������ʽ
console.log(util.isRegExp(new RegExp()));
console.log(util.isRegExp(/a/));
//��������
console.log(util.isRegExp(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2}$/));
console.log(util.isRegExp({}));//false


//�ж��Ƿ��Ǵ���
console.log(util.isError(new Error));//true
console.log(util.isError(new TypeError));//true