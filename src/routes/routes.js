const express = require("express")
const Hero = require("../models/Hero")
const router = express.Router()

router.get("/", async (req, res) => {
	const heroes = await Hero.find()

    //const heroes = await Hero.findOne({name: "Ana"})
	
	/*Hero.find({}, function(err, items) {
		var map = {};
	
		items.forEach(function(item) {
		  map[item._id] = item;
		});
		

		console.log('get all heroes',  map)
		
		res.send(map);  
	  });*/

	console.log('get all heroes', heroes)
	res.send(heroes);
})

router.get("/heroes", async (req, res) => {
	const heroes = await Hero.find();
	res.send(heroes);
})

router.get("/heroes/:name", async (req, res) => {
	const hero = await Hero.findOne({ name: req.params.name })
	res.send(hero)
})

router.get("/type/:type", async (req, res) => {
	const heroesByType = await Hero.find({ type: req.params.type });
	res.send(heroesByType)
})

router.post("/updateHeroes", async (req, res) => {
    //save heroes to database
})

module.exports = router