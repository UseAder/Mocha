class Demo {
	
	waitTwoSecond(data,callback){
		setTimeout(function(){
			callback(data);
		},1000);//不能超时2s
	}	

}

module.exports = Demo;