const express = require("express")
const { dbData } = require("../dbData")
const Hero = require("../models/Hero")
const router = express.Router()

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

router.get("/heroes", async (req, res) => {
	try {
		const heroes = await Hero.find();
		res.send(heroes);
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.get("/heroes/:name", async (req, res) => {
	let name = capitalizeFirstLetter(req.params.name)

	try {
		// Get hero using name
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
		// Get all heroes of selected type
		const heroesByType = await Hero.find({ type: req.params.type });
		res.send(heroesByType)
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.post("/initialUpload", async (req, res) => {
    // Post all documents to database
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

router.put("/updateHeroes/:heroName", async (req, res) => {
	let name = capitalizeFirstLetter(req.params.heroName)

	// Get data
	var heroArr = [];
	for (var a = 0; a < dbData.length; a++){
		if (dbData[a].name === name){
			heroArr.push(dbData[a])
		}
	}

	try {
		// Update document in database
		Hero.findOneAndUpdate(
			{name: name},
			heroArr[0],
			{new: true},
			(err, item) => {
				if (err) return res.status(500).send(err);
			
				const response = {
					message: "Item successfully updated",
					id: item._id
				};
					
				return res.status(200).send(response);
			});
	} catch {
		res.status(404)
		res.send({ error: "Put request error!" })
	}
})

router.put("/updateHeroes/", async (req, res) => {
	try {
		await dbData.forEach(item => {
			// Get  data 
			var heroArr = [];
			for (var a = 0; a < dbData.length; a++){
				if (dbData[a].name === item.name){
					heroArr.push(dbData[a])
				}
			}

			// Update documents
			Hero.findOneAndUpdate(
				{name: item.name},
				heroArr[0],
				{new: true},
				(err, item) => {
					if (err) return res.status(500).send(err);
				
					const response = {
						message: item.name + " successfully updated",
						id: item._id
					};
						
					return res.status(200).send(response);
				});
		})
	} catch {
		res.status(404)
		res.send({ error: "Put request error!" })
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