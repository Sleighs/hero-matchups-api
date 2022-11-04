const express = require("express")
const { heroData } = require("../heroData")
const Hero = require("../models/Hero")
const adminRouter = express.Router()

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

// Routes for updating documents
adminRouter.post("/initialUpload", async (req, res) => {
	console.log('init')
    // Post all documents to database
	try {
		 heroData.forEach((info,i) => {
			//const newHero = new Hero(item);
			//newHero.save();	

			Hero.findOneAndUpdate(
				{name: info.name},
				info,
				{new: true},
				(err, item) => {
					if (err) return res.status(500).send(err);
				
					const response = {
						message: "Item successfully updated",
						name: info.name,
					};
						
					return res.status(200).send(response);
				});
		})
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

adminRouter.put("/updateHero/:heroName", async (req, res) => {
	let name = capitalizeFirstLetter(req.params.heroName)
	
	if (name === "Dva" || name === "DVa" || name === "D.va"){
		name = "D.Va"
	} else if (name === "JunkerQueen" || name === "Junkerqueen" || name === "Junker queen"){
		name = "Junker Queen" 
	} else if (name === "WreckingBall" || name === "Wreckingball" || name === "Wrecking ball" ){
		name = "Wrecking Ball" 
	} else if (name === "Soldier76" || name === "Soldier:76" || name === "Soldier 76"){
		name = "Soldier: 76"
	} else if (name === "Torbjorn" || name === "Torbjörn"){
		//name = "Torbjörn"
		name = "Torbjorn"
	} else if (name === "McCree" || name === "Mccree"){
		name = "Cassidy" 
	}

	// Get data
	var heroArr = [];
	for (var a = 0; a < heroData.length; a++){
		if (heroData[a].name === name){
			heroArr.push(heroData[a])
		}
	}

	try {
		//console.log('obj', heroArr[0].archetype)
		// Update document in database
		Hero.findOneAndUpdate(
			{name: name},
			heroArr[0],
			{new: true},
			(err, item) => {
				if (err) return res.status(500).send(err);
			
				const response = {
					message: "Item successfully updated",
					name: name,
					//arch: item.archetype,
					//id: item._id
				};
					
				return res.status(200).send(response);
			});
	} catch {
		res.status(404)
		res.send({ error: "Put request error!" })
	}
})

adminRouter.put("/updateHeroes/", async (req, res) => {
	try {
		await heroData.forEach(item => {
			// Get data 
			var heroArr = [];
			for (var a = 0; a < heroData.length; a++){
				if (heroData[a].name === item.name){
					heroArr.push(heroData[a])
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

adminRouter.delete("/delete/:heroName", async (req, res) => {
	try {
		Hero.remove({name: req.params.heroName}, function(err){
			if (err) {
				res.send(err);
			} else{
				// change respond, add status to avoid error
				res.send("deleted", req.params.heroName);
			}
		});
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})


module.exports = adminRouter