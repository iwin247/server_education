var express = require('express');
var app = express();

app.get('/', (req,res)=>{
  res.send("hello world");
});

//url param
app.get('/:test', (req, res)=>{
  var test = req.param('test');
  var test2 = req.params.test;
  res.send(test+"vs"+test2)
});

app.get('/query/:query', (req, res)=>{
  var query = req.query.query;
  var query2 = req.query['query'];
  res.send(query+":"+query2);
});

app.post('/', (req, res)=>{
  var param = req.body;
  console.log(param);
});

app.listen(8080);
