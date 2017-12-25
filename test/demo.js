describe('Demo',function(){
	describe('方法 1',function(){//1

		before(function(){
			console.log('--->测试之前');//2
		})

		after(function(){
			console.log('--->测试之后');//10
		})

		beforeEach(function(){
			console.log('--->每条测试之前');//4 7
		})

		afterEach(function(){
			console.log('--->每条测试之后');//6 9
		})

		context('情境 1',function(){//3
			it('测试 1',function(){//5

			})

			it('测试 2',function(){// 8
				
			})
		})
	})
})