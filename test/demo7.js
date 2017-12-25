const chai = require('chai');
const expect = chai.expect;

var Demo = require('../lib/demo3');

var demo  = new Demo();

describe('Demo',()=>{

	
	it('给汽车引擎加水是不能接受的事情',function(done){
		expect(function(){
			demo.engine('water')
		}).to.throw('not accept');
		done();
	});
	
	// it('给汽车引擎加水是不能接受的事情',function(done){
	// 	expect(demo.engine.bind(demo,'water')).to.throw('not accept');
	// 	done();
	// });
})