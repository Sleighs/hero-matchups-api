const express = require("express");
const { heroData } = require("../heroData");
const Hero = require("../models/Hero");
const adminRouter = express.Router();

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}



// Log write attempts and payloads to help debug PUT/POST/DELETE errors
adminRouter.use((req, res, next) => {
	if (req.method === 'PUT' || req.method === 'POST' || req.method === 'DELETE') {
		try {
			console.warn(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} — body: ${JSON.stringify(req.body || {})}`)
		} catch (logErr) {
			console.warn(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} — body: [unserializable]`)
		}
	}
	next()
})
adminRouter.get("/", async (req, res) => {
	try {
		res.send({
			base: apiUrl,
			allHeroes: apiUrl + '/heroes',
			singleHero: apiUrl + '/heroes/:heroName',
			heroesOfType: apiUrl + '/type/:type',
			allArchetypes: apiUrl + '/archetype',
			archetypeByName: apiUrl + '/archetype/:archetypeName',
			randomHero: apiUrl + '/random',
			randomHeroByType: apiUrl + '/random/:type',
			lastUpdated: 'December 18, 2022',
			currentPort: process.env.PORT || 0,
		});
	} catch (err) {
		console.error(`[${new Date().toISOString()}] GET /admin — error:`, err)
		res.status(404)
		res.send({ error: "Request error retrieving route information!" })
	}
});



// Routes for updating

adminRouter.put("/updateAll/", async (req, res) => {
  try {
    // Use Promise.all to wait for all updates to complete
    const updatePromises = heroData.map(async (item) => {
      console.log("heroData item >> ", item)
      // update each hero using the name
      try {
        const result = await Hero.findOneAndUpdate(
          {name: item.name},
          {$set: item},
          {new: true}
        );
        console.log("Updated hero >> ", result?.name || item.name)
        return result;
      } catch (updateErr) {
        console.error(`Error updating ${item.name}:`, updateErr)
        throw updateErr;
      }
    });
    
    // Wait for all updates to complete
    await Promise.all(updatePromises);
    
    return res.status(200).send({message: "All heroes updated!"})
  } catch (err) {
    console.error(`[${new Date().toISOString()}] PUT /admin/updateAll — error:`, err)
    res.status(500)
    res.send({ error: "updateAll request error!" })
  }

});

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
	let heroArr = [];
	for (let a = 0; a < heroData.length; a++){
		if (heroData[a].name === name){
			heroArr.push(heroData[a])
		}
	}

	try {
		// Update document in database
    await Hero.findOneAndUpdate({name: name}, heroArr[0], {new: true})

			// (err, item) => {
			// 	if (err) return res.status(500).send(err);
			
				const response = {
					message: "Item successfully updated",
					name: name,
					//id: item._id
				};
					
				return res.status(200).send(response);
			// });
	} catch (error) {
		console.error(`[${new Date().toISOString()}] PUT /admin/updateHero/:heroName — params: ${JSON.stringify(req.params)} — error:`, error)
		res.status(404)
		res.send({ error: "Put request error!" })
	}
});



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
    res.status(201).send({message: "Hero added!", heroData: heroArr[0]})
	} catch (err) {
		console.error(`[${new Date().toISOString()}] POST /admin/addHero/:heroName — params: ${JSON.stringify(req.params)} — error:`, err)
		res.status(404)
		res.send({ error: "Post request error!" })
	}

  return 
})


adminRouter.delete("/delete/:heroName", async (req, res) => {
	try {
		await Hero.remove({name: req.params.heroName}, function(err){
			if (err) {
				res.send(err);
			} else{
				// change respond, add status to avoid error
				res.send("deleted", req.params.heroName);
			}
		});
	} catch (err) {
		console.error(`[${new Date().toISOString()}] DELETE /admin/delete/:heroName — params: ${JSON.stringify(req.params)} — error:`, err)
		res.status(404)
		res.send({ error: "Request error!" })
	}
})


module.exports = adminRouter