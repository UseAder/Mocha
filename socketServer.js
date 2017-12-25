var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

// http设置
app.get('/',function(req,res){
	function callback(data){
		res.send(data.toString());
	}
	fs.readFile('./index.html',function(err,data){
		if(err){
			console.log(err);
			callback('文件不存在!');
		}else{
			callback(data);
		}
	});

});

app.get('/socket.io.js',function(req,res){
	console.log('socket.io.js')
	function callback(data){
		res.send(data.toString());
	}
	fs.readFile('./socket.io.js',function(err,data){
		if(err){
			console.log(err);
			callback('文件不存在!');
		}else{
			console.log(data);
			callback(data);
		}
	});

});

// socket.io 设置
// 在线用户
var onlineUsers = {};
//当前用户人数
var onlineCount = 0;

var i = 0;

io.on('connection',function(socket){
	console.log('有人上线了!');

	//监听新用户的加入
	socket.name = ++i;
	onlineUsers[socket.name] = socket;

	//监听用户的退出
	socket.on('disconnect',function(){
		console.log('有人退出');
		delete onlineUsers[socket.name];
	});

	//监听用户发布的聊天内容
	socket.on('message',function(msg){
		broadcast(msg,socket);
	});

});

function broadcast(msg,socket){
	for(var key in onlineUsers){
		onlineUsers[key].send(socket.name+'说：'+msg);
	}
}

http.listen(9000,function(){
	console.log('listening on *:9000');
});
