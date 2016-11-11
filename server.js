var express = require("express");
var mongojs = require("mongojs");
var db = mongojs('resumedata',['resumedata']);
var bodyParser = require("body-parser");
var app = express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

	app.get('/educationlist', function(req, res){
		console.log("I received a GET request");

		db.resumedata.find({ type:"edu" } ,function(error, docs){
		console.log(docs);
		res.json(docs);
		});

	});

	app.get('/skilllist', function(req, res){
		console.log("I received a GET request");

		db.resumedata.find({ type:"skill" } ,function(error, docs){
		console.log(docs);
		res.json(docs);
		});

	});

	app.get('/projectlist', function(req, res){
		console.log("I received a GET request");

		db.resumedata.find({ type:"project" } ,function(error, docs){
		console.log(docs);
		res.json(docs);
		});

	});

console.log("Server running on port 3000, DON'T FORGET TO CHANGE TO 80 when all done");
//node server ======= to start server!!
//start mongod first /
//call mongo on another terminal to see whats in database
	app.listen(3000);
