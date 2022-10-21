const express = require("express")
const Hero = require("../models/Hero")
const router = express.Router()

router.get("/", async (req, res) => {
    const heroes = await Hero.find();
	res.send(heroes);
})

router.get("/heroes", async (req, res) => {
	const heroes = await Hero.find();
	res.send(heroes);
})

router.post("/heroesUpdate", async (req, res) => {
    //save heroes to database
})

module.exports = router