const express = require("express")
const Hero = require("../models/Hero")
const router = express.Router()

function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

router.get("/", async (req, res) => {
	try {
		res.send({
			allHeroes: 'https://hero-matchups-api.herokuapp.com/heroes',
			singleHero: 'https://hero-matchups-api.herokuapp.com/heroes/:heroName',
			heroesOfType: 'https://hero-matchups-api.herokuapp.com/type/:type',
			randomHero: 'https://hero-matchups-api.herokuapp.com/random',
			randomHeroByType: 'https://hero-matchups-api.herokuapp.com/random/:type'
		});
	} catch {
		res.status(404)
		res.send({ error: "Request error!" })
	}
})

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
		} else if (name === "Torbjorn"){
			const heroByName = await Hero.find({ name: "Torbjörn" })
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