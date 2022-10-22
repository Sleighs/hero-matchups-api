const express = require("express")
const { dbData } = require("../dbData")
const Hero = require("../models/Hero")
const router = express.Router()

router.get("/", async (req, res) => {

})

router.get("/heroes", async (req, res) => {
	try {
		const heroes = await Hero.find();
		res.send(heroes);

		/*Hero.find({}, function(err, items) {
			var map = {};
		
			items.forEach(function(item) {
				map[item._id] = item;
			});
			
			console.log('get all heroes',  map)
			
			res.send(map);  
		});
		*/
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.get("/heroes/:name", async (req, res) => {
	function capitalizeFirstLetter([ first='', ...rest ]) {
		return [ first.toUpperCase(), ...rest ].join('');
	}

	let name = capitalizeFirstLetter(req.params.name)
	//console.log(name)

	try {
		if (name === "Dva" || name === "DVa" || name === "D.va"){
			const heroByName = await Hero.find({ name: "D.Va" })
			res.send(heroByName)
		} else if (name === "JunkerQueen" || name === "Junkerqueen" || name === "Junker queen"){
			const heroByName = await Hero.find({ name: "Junker Queen" })
			res.send(heroByName)
		} else if (name === "WreckingBall" || name === "Wreckingball" || name === "Wrecking ball" ){
			const heroByName = await Hero.find({ name: "Wrecking Ball" })
			res.send(heroByName)
		} else if (name === "Soldier76" || name === "Soldier:76" || name === "Soldier 76"){
			const heroByName = await Hero.find({ name: "Soldier: 76" })
			res.send(heroByName)
		} else {
			const heroByName = await Hero.find({ name: name })
			res.send(heroByName)
		}
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.get("/type/:type", async (req, res) => {
	try {
		const heroesByType = await Hero.find({ type: req.params.type });
		res.send(heroesByType)
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.post("/initialUpload", async (req, res) => {
    //save heroes to database
	try {
		await dbData.forEach(item => {
			const newHero = new Hero(item);
			newHero.save();		
		})
		res.send('Post success')
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.delete("/delete/:heroName", async (req, res) => {
	try {
		Hero.remove({name: req.params.heroName}, function(err){
			if(err)
			{
				res.send(err);
			}
			else{
				// change respond, add status to avoid error
				res.send("deleted", req.params.heroName);
			}
		});
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

module.exports = router