const express = require("express")
const Hero = require("../models/Hero")
const router = express.Router()

//const apiUrl = 'https://hero-matchups-api.herokuapp.com'
const apiUrl = 'https://hero-matchups-api.netlify.app/.netlify/functions/api'


function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

router.get("/", async (req, res) => {
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
		});
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving route information!" })
	}
})

router.get("/heroes", async (req, res) => {
	try {
		const heroes = await Hero.find();
		res.send(heroes);
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving heroes!" })
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
		} else if (name === "WreckingBall" || name === "Wreckingball" || name === "Wrecking ball"){
			const heroByName = await Hero.find({ name: "Wrecking Ball" })
			res.send(heroByName)
		} else if (name === "Soldier76" || name === "Soldier:76" || name === "Soldier 76"){
			const heroByName = await Hero.find({ name: "Soldier: 76" })
			res.send(heroByName)
		} else if (name === "Torbjorn" || name === "Torbjörn"){
			//const heroByName = await Hero.find({ name: "Torbjörn" })
			const heroByName = await Hero.find({ name: "Torbjorn" })
			res.send(heroByName)
		} else if (name === "McCree" || name === "Mccree"){
			const heroByName = await Hero.find({ name: "Cassidy" })
			res.send(heroByName)
		} else {
			const heroByName = await Hero.find({ name: name })
			res.send(heroByName)
		}
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving hero information!" })
	}
})

router.get("/type/:type", async (req, res) => {
	try {
		// Get all heroes of selected type
		const heroesByType = await Hero.find({ type: req.params.type });
		res.send(heroesByType)
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving type list!" })
	}
})

router.get("/archetype", async (req, res) => {
	try {
		res.send({
			tank: ["Anchor", "Initiator", "First Responder", "Damage Heavy"],
			damage: ["Anchor", "Flanker", "Sniper", "Scrapper", "Specialist"],
			support: ["Main Healer", "Pocket Healer", "Utility"]
		});
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving archetype list!" })
	}
})

router.get("/archetype/:archetypeName", async (req, res) => {
	let archetypeName = capitalizeFirstLetter(req.params.archetypeName)

	try { 
		if (archetypeName === "First responder" || archetypeName === "Firstresponder"){
			const heroesByArchetype = await Hero.find({ archetype: { $in: ["First Responder"] }});
			res.send(heroesByArchetype)
		} else if (archetypeName === "Damage heavy" || archetypeName === "Damageheavy"){
			const heroesByArchetype = await Hero.find({ archetype: { $in: ["Damage Heavy"] }});
			res.send(heroesByArchetype)
		} else if (archetypeName === "Main healer" || archetypeName === "Mainhealer"){
			const heroesByArchetype = await Hero.find({ archetype: { $in: ["Main Healer"] }});
			res.send(heroesByArchetype)
		} else if (archetypeName === "Pocket healer" || archetypeName === "Pockethealer"){
			const heroesByArchetype = await Hero.find({ archetype: { $in: ["Pocket Healer"] }});
			res.send(heroesByArchetype)
		} else{
			const heroesByArchetype = await Hero.find({ archetype: { $in: [archetypeName] }});
			res.send(heroesByArchetype)
		}
		
	} catch {
		res.status(404)
		res.send({ error: "Request error retrieving archetype list!" })
	}
})

router.get("/random", async (req, res) => {
	try { 
		const heroes = await Hero.find()
		var randomNum = Math.floor((Math.random() * heroes.length) + 1)
		res.send(heroes[randomNum])
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

router.get("/random/:type", async (req, res) => {
	try {
		const heroesByType = await Hero.find({ type: req.params.type });
		var randomNum = Math.floor((Math.random() * heroesByType.length) + 1)
		res.send(heroesByType[randomNum])
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

module.exports = router