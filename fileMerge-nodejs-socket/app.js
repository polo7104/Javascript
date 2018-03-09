var express = require('express');
var fs = require('fs');
var moment = require('moment');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var StaticMerge = require('./StaticMergeClass');

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.send('dsdssddd');
});

server.listen(4000);
io.on('connection',function(socket){
    console.log(socket.id + '서버에 고객님이 접속하셨습니다.');

    socket.on('mergefile',(data) =>{
        var getData = JSON.parse(data);
        var LastfileName  = getData['LastfileName'].replace(/\\/gi,'/');
        var path          = '../html/' + getData['Path'].replace(/\\/gi,'/');
        var LastfileNo    = LastfileName.split('_');
        var StartFileName = '';
        LastfileName      = LastfileName.split('/');
        LastfileName      = LastfileName[LastfileName.length-1].split('_').slice(0, -1).join('_');
        LastfileNo        = Number(LastfileNo[LastfileNo.length-1]);
        var CheckFilePath = path.split('/').slice(0, -1).join('/');
        var ChekFileFullPath = '';
        var StartFileName = LastfileName+'_1';
        var arrFiles = new Array();

        for(var i=0; i<LastfileNo; i++){
            arrFiles[i] = CheckFilePath+'/'+LastfileName+'_'+(i+1);
        }

        var result = "초기값";
        result = StaticMerge.MergeSplittedFiles(path,arrFiles);

        io.to(socket.id).emit('broad', result);

    });

});
