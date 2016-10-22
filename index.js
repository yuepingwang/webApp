var express = require('express')
var path-requrie('path')

var app = express();

var http = require('http')

http= http.Server(app)
//MiddelWare
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){

	var name = "Yueping"

	res.send("Hello ITP")
	//res.render("index.pug")
})

app.get('/about',function(req,res){
	res.send("About ITP")
	//res.send("about.pug")
})

var server = http.listen(3000,function(){
	console.log('I am running an app on port 3000')
})