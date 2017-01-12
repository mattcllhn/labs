var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonData = require(path.resolve('data.json'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/bootstrap', express.static(path.resolve ('./node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.resolve ('./node_modules/angular')));
app.use('/edit', express.static(path.resolve ('./node_modules/angular-xeditable/dist')));


app.listen(3000,function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});
app.put('/jsonUpdate',function(req,res){
  console.log('hello fron jsonUpdate\n'+req.body);
  jsonData.ex1 = req.body;
  fs.writeFile('data.json',JSON.stringify(jsonData,null,4));

  res.sendStatus(200);
});//jsonUpdate
app.get('/jsonData',function(req, res){
  console.log('here is the req.query\n\n\n\n\n',req.query);
  // console.log(jsonData);
  // console.log(typeof(jsonData));
  // jsonData.ex4 = {test:"test"};
  // fs.writeFile('data.json',JSON.stringify(jsonData,null,4));
  switch (req.query.param) {
    case undefined:
    console.log(jsonData.ex1);
    res.send(jsonData.ex1);
    break;
    case 'ex1':
    console.log(jsonData.ex1);
    res.send(jsonData.ex1);
    break;
    case 'ex2':
    console.log(jsonData.ex2);
    res.send(jsonData.ex2);
    break;
    case 'ex3':
    console.log(jsonData.ex3);
    res.send(jsonData.ex3);
    break;
    default:
    console.log('critical switch malfunction');
  }


  // res.sendStatus(200);
});

app.post('/test',function(req,res){
  var data = req.body;
  console.log(data);
  fs.writeFile('testeroo.json', JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > testeroo.json');
  });
  res.sendStatus(201);
});
