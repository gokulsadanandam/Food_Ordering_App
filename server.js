var express = require('express'),
	app = express(),
	bodyparser = require('body-parser'),
	mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/FoodOrderApp')
mongoose.connect('mongodb://gokul:gokul@24@ds125372.mlab.com:25372/foodorderingapp')

var schema = new mongoose.Schema({
	"name":String
})

var data = mongoose.model('hotels',schema)

app.use('/',express.static(__dirname+'/client'))

app.get('/',(req,res)=>{
	res.sendFile(__dirname + "/client/index.html")
})

app.get('/api/data',(req,res)=>{
	data.find({},(err,docs)=>{
		res.json(docs)
	})
})


app.listen(process.env.PORT||3000)
