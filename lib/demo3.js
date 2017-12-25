
class Demo{

	engine(fuel){
		if(!(fuel === 'gas')){//异常函数
			throw new Error('not accept');
		}
	}
	

}

module.exports = Demo;