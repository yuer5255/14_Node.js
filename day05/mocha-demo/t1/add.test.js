var add = require('./add');
var expect = require('chai').expect;

//console.log(add(1+1));


//编写测试用例
describe('add test',function(){
    it('1 + 1 = 2',function(){
        expect(add(1,1)).to.be.equal(2);
    })
});

