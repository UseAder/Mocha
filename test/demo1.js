const chai = require('chai');
const assert = chai.assert;

describe('Demo',function(){
	it('使用assert风格的断言测试',function(){
		var value = 'hello';
		assert.typeOf(value,'string');//是字符串
		assert.equal(value,'hello');//词等同
		assert.lengthOf(value,5);//长度
	});
});
