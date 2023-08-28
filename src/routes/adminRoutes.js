const express = require("express")
const { heroData } = require("../heroData")
const Hero = require("../models/Hero")
const adminRouter = express.Router()

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

// Routes for updating documents
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
    // Update documents
    const updatesArray = [
      { filter: { name: "Ana" }, update: { $set: heroData.filter(item => item.name === 'Ana')[0] } },
      { filter: { name: "Ashe" }, update: { $set: heroData.filter(item => item.name === 'Ashe')[0] } },
      { filter: { name: "Baptiste" }, update: { $set: heroData.filter(item => item.name === 'Baptiste')[0] } },
      { filter: { name: "Bastion" }, update: { $set: heroData.filter(item => item.name === 'Bastion')[0] } },
      { filter: { name: "Brigitte" }, update: { $set: heroData.filter(item => item.name === 'Brigitte')[0] } },
      { filter: { name: "D.Va" }, update: { $set: heroData.filter(item => item.name === 'D.Va')[0] } },
      { filter: { name: "Doomfist" }, update: { $set: heroData.filter(item => item.name === 'Doomfist')[0] } },
      { filter: { name: "Echo" }, update: { $set: heroData.filter(item => item.name === 'Echo')[0] } },
      { filter: { name: "Genji" }, update: { $set: heroData.filter(item => item.name === 'Genji')[0] } },
      { filter: { name: "Hanzo" }, update: { $set: heroData.filter(item => item.name === 'Hanzo')[0] } },
      { filter: { name: "Illari" }, update: { $set: heroData.filter(item => item.name === 'Illari')[0] } },
      { filter: { name: "Junkrat" }, update: { $set: heroData.filter(item => item.name === 'Junkrat')[0] } },
      { filter: { name: "Junker Queen" }, update: { $set: heroData.filter(item => item.name === 'Junker Queen')[0] } },
      { filter: { name: "Kiriko" }, update: { $set: heroData.filter(item => item.name === 'Kiriko')[0] } },
      { filter: { name: "Lifeweaver" }, update: { $set: heroData.filter(item => item.name === 'Lifeweaver')[0] } },
      { filter: { name: "Lucio" }, update: { $set: heroData.filter(item => item.name === 'Lucio')[0] } },
      { filter: { name: "Cassidy" }, update: { $set: heroData.filter(item => item.name === 'Cassidy')[0] } },
      { filter: { name: "Mei" }, update: { $set: heroData.filter(item => item.name === 'Mei')[0] } },
      { filter: { name: "Mercy" }, update: { $set: heroData.filter(item => item.name === 'Mercy')[0] } },
      { filter: { name: "Moira" }, update: { $set: heroData.filter(item => item.name === 'Moira')[0] } },
      { filter: { name: "Orisa" }, update: { $set: heroData.filter(item => item.name === 'Orisa')[0] } },
      { filter: { name: "Pharah" }, update: { $set: heroData.filter(item => item.name === 'Pharah')[0] } },
      { filter: { name: "Ramattra" }, update: { $set: heroData.filter(item => item.name === 'Ramattra')[0] } },
      { filter: { name: "Reaper" }, update: { $set: heroData.filter(item => item.name === 'Reaper')[0] } },
      { filter: { name: "Reinhardt" }, update: { $set: heroData.filter(item => item.name === 'Reinhardt')[0] } },
      { filter: { name: "Roadhog" }, update: { $set: heroData.filter(item => item.name === 'Roadhog')[0] } },
      { filter: { name: "Sigma" }, update: { $set: heroData.filter(item => item.name === 'Sigma')[0] } },
      { filter: { name: "Sojourn" }, update: { $set: heroData.filter(item => item.name === 'Sojourn')[0] } },
      { filter: { name: "Soldier: 76" }, update: { $set: heroData.filter(item => item.name === 'Soldier: 76')[0] } },
      { filter: { name: "Sombra" }, update: { $set: heroData.filter(item => item.name === 'Sombra')[0] } },
      { filter: { name: "Symmetra" }, update: { $set: heroData.filter(item => item.name === 'Symmetra')[0] } },
      { filter: { name: "Torbjorn" }, update: { $set: heroData.filter(item => item.name === 'Torbjorn')[0] } },
      { filter: { name: "Tracer" }, update: { $set: heroData.filter(item => item.name === 'Tracer')[0] } },
      { filter: { name: "Widowmaker" }, update: { $set: heroData.filter(item => item.name === 'Widowmaker')[0] } },
      { filter: { name: "Winston" }, update: { $set: heroData.filter(item => item.name === 'Winston')[0] } },
      { filter: { name: "Wrecking Ball" }, update: { $set: heroData.filter(item => item.name === 'Wrecking Ball')[0] } },
      { filter: { name: "Zarya" }, update: { $set: heroData.filter(item => item.name === 'Zarya')[0] } },
      
    ]
    //console.log(updatesArray)


    updatesArray.map(async (item) => {
      await Hero.updateOne(
        item.filter,
        item.update
      )
    })

    // updatesArray.map(async (item) => {
    //   await Hero.findOneAndUpdate(
    //     item.filter,
    //     item.update,
    //     { new: true },
    //     (err, item) => {}
    //   )
    // })




		// heroData.forEach(item => {
		// 	// Get list of heroes 
		// 	var heroArr = [];
		// 	for (var a = 0; a < heroData.length; a++){
		// 		if (heroData[a].name === item.name){
		// 			heroArr.push(heroData[a])
		// 		}
		// 	}

		// 	// Update each listed hero
		// 	for (let item in heroArr){
		// 		// Update documents
		// 		Hero.findOneAndUpdate(
		// 			{name: item.name},
		// 			heroArr[0],
		// 			{new: true},
		// 			(err, item) => {
		// 				if (err) return res.status(500).send(err);
					
		// 				const response = {
		// 					message: item.name + " successfully updated",
		// 					id: item._id
		// 				};
							
		// 				return res.status(200).send(response);
		// 			});
		// 		}
		// })
    return res.status(200).send({ message: "Heroes updated!" })
	} catch {
		res.status(404)
		res.send({ error: "Put request error!" })
	}
})


adminRouter.post("/addHero/:heroName", async (req, res) => {
	let name = capitalizeFirstLetter(req.params.heroName)
	
	var heroArr = [];
	for (var a = 0; a < heroData.length; a++){
		if (heroData[a].name === name){
			heroArr.push(heroData[a])
		}
	}

	try {
		await Hero.create(heroArr[0])
		res.status(200).send({ message: "Hero added!" })
	} catch {
		res.status(404).send({ error: "Post request error!" })
	}
	return
})


adminRouter.delete("/delete/:heroName", async (req, res) => {
	try {
		Hero.remove({name: req.params.heroName}, function(err){
			if (err) {
				res.send(err);
			} else {
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