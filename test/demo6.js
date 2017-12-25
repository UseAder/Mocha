const chai = require('chai');
const expect = chai.expect;

var Demo = require('../lib/demo2');

var demo  = new Demo();

describe('Demo',()=>{

	it('加载豆瓣API返回的数据应该包含subjects属性',function(done){
		demo.fetchData('top250',function(data){
			expect(data).to.have.property('subjects');
			done();
		});
	});

});