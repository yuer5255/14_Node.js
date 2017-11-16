var expect = require('chai').expect;

describe('Class A',function () {
    it('equal',function () {
        expect(1+1).to.be.equal(2);
    })
    it('no equal',function () {
        expect(1-1).to.be.not.equal(1);
    })
});

describe('Class B',function () {
    it('true',function () {
        expect(1).to.be.ok;
    })
    it('false',function () {
        expect(0).to.be.not.ok;
    })
    it('false',function () {
        expect({}).to.be.ok;
    })
});

describe('Class C',function () {
    it('type of',()=>{
        expect('test...').to.be.a('string');
    })
    it('type of',()=>{
        expect({}).to.be.an('object');
    })
});

describe('Class D',function () {
    it('include',()=>{
        expect([1,2,3]).to.include(1);
    })
    it('contain',()=>{
        expect('hello world').to.contain('hell');
    })
    it('include key',()=>{
        expect({k1:'v1',k2:'v2'}).to.include.keys('k1');
    })
});

