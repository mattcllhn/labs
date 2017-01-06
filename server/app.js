var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

app.use('/bootstrap', express.static(path.resolve ('./node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.resolve ('./node_modules/angular')));

app.listen(3000,function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});
