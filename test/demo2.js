const chai = require('chai');
const should = chai.should();

describe('Demo',function(){
	it('使用should风格的断言测试',function(){
		var value = 'hello';
		// value.should.exist;
		// value.should.be.a('string');
		// value.should.equal('hello');
		// value.should.have.length(5);

		value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string');
	});
});
