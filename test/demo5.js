const chai = require('chai');
const expect = chai.expect;

var Demo = require('../lib/demo1');//延迟返回

var demo  = new Demo();

describe('Demo',()=>{

	
	it('一段时间以后返回数据',function(done){
		demo.waitTwoSecond('hello',function(data){
			expect(data).to.equal('你好');
			done();
		})
	});
})