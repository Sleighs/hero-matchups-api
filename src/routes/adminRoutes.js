const express = require("express")
const { heroData } = require("../heroData")
const Hero = require("../models/Hero")
const adminRouter = express.Router()

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

// Routes for updating documents
adminRouter.post("/initialUpload", async (req, res) => {
    // Post all documents to database
	try {
		await heroData.forEach(item => {
			const newHero = new Hero(item);
			newHero.save();		
		})
		res.send('Post success')
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

adminRouter.put("/updateHero/:heroName", async (req, res) => {
	let name = capitalizeFirstLetter(req.params.heroName)

	// Get data
	var heroArr = [];
	for (var a = 0; a < heroData.length; a++){
		if (heroData[a].name === name){
			heroArr.push(heroData[a])
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

adminRouter.put("/updateHeroes/", async (req, res) => {
	try {
		await heroData.forEach(item => {
			// Get  data 
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