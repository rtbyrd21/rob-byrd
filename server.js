var express        = require('express'); 
var app            = express();
var path           = require('path');


var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/builds/development/'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/builds/development/index.html'));
});


app.listen(port, function(){
  console.log('listening on port ' + port);
});

