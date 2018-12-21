var express = require('express'),
	app = express(),
	bodyparser = require('body-parser');

app.use('/',express.static(__dirname+'/client'))

app.get('/',(req,res)=>{
	res.sendFile(__dirname + "/client/index.html")
})

app.get('/api/user',(req,res)=>{
	res.send("adsfas")
})


app.listen(process.env.PORT||3000)
