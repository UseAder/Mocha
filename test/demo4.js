const chai = require('chai');
const expect = chai.expect;

var Demo = require('../lib/demo');//引入相乘函数方法

var demo  = new Demo();

describe('Demo',()=>{

	it('单价 10 块钱的 3 件商品小计金额应该是 30块',function(){
		var subtotal = demo.subtotal(10,3);
		// expect(subtotal).to.equal('30'); //类型错误
		expect(subtotal).to.equal(30);
	});
})