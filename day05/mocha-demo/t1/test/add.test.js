var add = require('../add');
var sub = require('../sub');

var expect = require('chai').expect;



// 编写测试用例 测试套件也可以有多个
// describe:test suite 测试套件 一个测试套件中可以有多个测试用例
// 第一个参数是测试描述，第二个参数中是测试语句
describe('add test',function(){
    //一条测试用例   test case
    it('1 + 1 = 2',function(){
        //expect().to.be.equal()
        expect(add(1,1)).to.be.equal(2);
    })

    it('1 + 0 = 1',function(){
        //expect().to.be.equal()
        expect(add(1,0)).to.be.equal(1);
    })
});


describe('A sub() function Test',function () {
    it('1 - 1 = 0',function () {
        //断言
        expect(sub(1, 1)).to.be.equal(0);
    })
})

