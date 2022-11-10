// Curated hero data. Updates come here first.
// Game: Overwatch 2, version 3.39, Oct 25 2022

var heroData = [
  {
    name: "D.Va",
    type: "tank",
    counters: {
      Ana: "+",
      Ashe: "+",
      Bastion: "+",
      Brigitte: "-",
      Doomfist: "-",
      Hanzo: "++",
      Junkrat: "-",
      Cassidy: "+",
      Mei: "-",
      Mercy: "++",
      Moira: "+",
      Pharah: "+",
      Reaper: "+",
      Sombra: "-",
      Widowmaker: "++",
      Zarya: "--"
    }, 
    /*characteristics: {
      durability: '',
      initiative: '',
      utility: '',
      damage: ''
    },*/
    archetype: ["First Responder"],
    difficulty: 2,
    skill: 2,
    health: 350,
    health2: 150,
    armor: 300,
    shields: 0,
  },
  {
    name: "Doomfist",
    type: "tank",
    counters: {
      Ashe: "-",
      Dva: "+",
      Genji: "-",
      Orisa: "-",
      Pharah: "--",
      Soldier76: "-",
      Sombra: "--"
    },
    archetype: ["Initiator"],
    difficulty: 3,
    skill: 3,
    health: 450,
    armor: 0,
    shields: 0,
  },
  {
    name: "Junker Queen",
    type: "tank",
    counters: {
      Ana: "+",
      Bastion: "--",
      Reaper: "-",
      Mei: "--",
      Orisa: "-",
      Zenyatta: "-"
    },
    archetype: ["Damage Heavy"],
    difficulty: 0,
    skill: 0,
    health: 425,
    armor: 0,
    shields: 0,
  },
  {
    name: "Orisa",
    type: "tank",
    counters: {
      Ashe: "+",
      Doomfist: "+",
      Genji: "-",
      Hanzo: "-",
      JunkerQueen: "+",
      Junkrat: "-",
      Moira: "-",
      Reaper: "-",
      Sigma: "-",
      Torbjorn: "+",
      Widowmaker: "-",
      Zarya: "-",
      Zenyatta: "-"
    },
    archetype: ["Anchor"],
    difficulty: 2,
    skill: 2,
    health: 275,
    armor: 275,
    shields: 0,
  },
  /*
  {
    name: 'Ramattra',
    type: 'tank',
    counters: {},
    health: 450,
    health2: 600,
  },
  */
  {
    name: "Reinhardt",
    type: "tank",
    counters: {
      Ashe: "+",
      Bastion: "--",
      Brigitte: "-",
      Junkrat: "--",
      Mei: "--",
      Orisa: "-",
      Pharah: "--",
      Reaper: "--",
      Sigma: "+",
      Soldier76: "+",
      Sombra: "-",
      Widowmaker: "+"
    },
    archetype: ["Anchor"],
    difficulty: 1,
    skill: 1,
    health: 325,
    armor: 300,
    shields: 0,
  },
  {
    name: "Roadhog",
    type: "tank",
    counters: {
      Ana: "-",
      Baptiste: "+",
      Bastion: "+",
      Echo: "+",
      Lucio: "+",
      Cassidy: "+",
      Mei: "--",
      Mercy: "+",
      Reaper: "--",
      Sigma: "-",
      Soldier76: "+",
      Sombra: "+",
      Widowmaker: "-",
      Winston: "++",
      WreckingBall: "+",
      Zarya: "-"
    },
    archetype: ["Damage Heavy"],
    difficulty: 1,
    skill: 1,
    health: 700,
    armor: 0,
    shields: 0,
  },
  {
    name: "Sigma",
    type: "tank",
    counters: {
      Ana: "+",
      Lucio: "-",
      Orisa: "-",
      Reinhardt: "-",
      Roadhog: "+",
      Soldier76: "+",
      Widowmaker: "+"
    },
    archetype: ["Anchor"],
    difficulty: 3,
    skill: 3,
    health: 350,
    armor: 0,
    shields: 200,
  },
  {
    name: "Winston",
    type: "tank",
    counters: {
      Bastion: "-",
      Dva: "++",
      Genji: "++",
      Hanzo: "++",
      Cassidy: "+",
      Reaper: "--",
      Roadhog: "--",
      Symmetra: "+",
      Widowmaker: "++",
      Zenyatta: "++"
    },
    archetype: ["Initiator"],
    difficulty: 2,
    skill: 2,
    health: 350,
    armor: 200,
    shields: 0,
  },
  {
    name: "Wrecking Ball",
    type: "tank",
    counters: {
      Ana: "-",
      Brigitte: "--",
      Mei: "-",
      Reaper: "-",
      Roadhog: "-",
      Sombra: "--",
      Widowmaker: "+"
    },
    archetype: ["Initiator"],
    difficulty: 3,
    skill: 3,
    health: 550,
    armor: 150,
    shields: 0,
  },
  {
    name: "Zarya",
    type: "tank",
    counters: {
      Bastion: "-",
      Dva: "++",
      Genji: "++",
      Junkrat: "+",
      Mei: "+",
      Pharah: "--",
      Sojourn: "+",
      Sombra: "-",
      Reaper: "-",
      Roadhog: "+",
      Torbjorn: "++",
      Zenyatta: "-"
    },
    archetype: ["First Responder"],
    difficulty: 3,
    skill: 3,
    health: 250,
    armor: 0,
    shields: 225,
  },
  {
    name: "Ashe",
    type: "damage",
    counters: {
      Ana: "-",
      Brigitte: "+",
      Dva: "+",
      Doomfist: "+",
      Echo: "+",
      Hanzo: "-",
      Junkrat: "+",
      Mei: "+",
      Mercy: "+",
      Orisa: "-",
      Pharah: "++",
      Reaper: "+",
      Reinhardt: "-",
      Soldier76: "+",
      Symmetra: "+",
      Widowmaker: "-",
      Winston: "-",
      WreckingBall: "-"
    },
    archetype: ["Anchor", "Sniper"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Bastion",
    type: "damage",
    counters: {
      Ana: "-",
      Dva: "-",
      Echo: "+",
      Genji: "-",
      Hanzo: "--",
      JunkerQueen: "++",
      Junkrat: "-",
      Lucio: "+",
      Reinhardt: "++",
      Roadhog: "-",
      Soldier76: "-",
      Tracer: "-",
      Widowmaker: "-",
      Winston: "++",
      Zarya: "+"
    },
    archetype: ["Anchor", "Specialist"],
    difficulty: 1,
    skill: 1,
    health: 200,
    armor: 100,
    shields: 0,
  },
  {
    name: "Cassidy",
    type: "damage",
    counters: {
      Dva: "-",
      Echo: "+",
      Lucio: "++",
      Mei: "-",
      Mercy: "+",
      Pharah: "++",
      Roadhog: "-",
      Sombra: "+",
      Symmetra: "+",
      Tracer: "+",
      Widowmaker: "-",
      Winston: "-"
    },
    archetype: ["Anchor"],
    difficulty: 2,
    skill: 2,
    health: 225,
    armor: 0,
    shields: 0,
  },
  {
    name: "Echo",
    type: "damage",
    counters: {
      Ana: "-",
      Bastion: "-",
      Baptiste: "-",
      Junkrat: "++",
      Cassidy: "-",
      Reaper: "+",
      Roadhog: "-",
      Soldier76: "-",
      Sombra: "-",
      Torbjorn: "+",
      Widowmaker: "-"
    },
    archetype: ["Flanker", "Scrapper"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Genji",
    type: "damage",
    counters: {
      Ana: "-",
      Baptiste: "+",
      Bastion: "+",
      Brigitte: "-",
      Doomfist: "+",
      Hanzo: "++",
      Mercy: "++",
      Orisa: "+",
      Pharah: "-",
      Soldier76: "+",
      Widowmaker: "++",
      Winston: "--",
      Zarya: "--",
      Zenyatta: "+"
    },
    archetype: ["Flanker", "Scrapper"],
    difficulty: 3,
    skill: 3,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Hanzo",
    type: "damage",
    counters: {
      Ashe: "+",
      Bastion: "+",
      Dva: "-",
      Genji: "--",
      Orissa: "+",
      Sombra: "+",
      Torbjorn: "++",
      Tracer: "-",
      Widowmaker: "-",
      Winston: "--"
    },
    archetype: ["Anchor", "Sniper"],
    difficulty: 3,
    skill: 3,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Junkrat",
    type: "damage",
    counters: {
      Ashe: "-",
      Bastion: "+",
      Brigitte: "+",
      Dva: "+",
      Echo: "--",
      Kiriko: "-",
      Orisa: "+",
      Pharah: "--",
      Reaper: "+",
      Reinhardt: "++",
      Sombra: "+",
      Torbjorn: "++",
      Tracer: "+",
      Widowmaker: "--",
      Zarya: "-"
    },
    archetype: ["Anchor", "Flanker", "Scrapper"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Mei",
    type: "damage",
    counters: {
      Ashe: "-",
      Dva: "+",
      JunkerQueen: "++",
      Lucio: "-",
      Cassidy: "+",
      Pharah: "-",
      Reinhardt: "++",
      Roadhog: "++",
      Widowmaker: "-",
      WreckingBall: "+",
      Zarya: "-"
    },
    archetype: ["Scrapper", "Specialist"],
    difficulty: 3,
    skill: 3,
    health: 250,
    armor: 0,
    shields: 0,
  },
  {
    name: "Pharah",
    type: "damage",
    counters: {
      Ana: "-",
      Ashe: "-",
      Brigitte: "++",
      Dva: "-",
      Doomfist: "++",
      Genji: "+",
      Junkrat: "++",
      Lucio: "++",
      Cassidy: "--",
      Mei: "+",
      Reaper: "++",
      Reinhardt: "++",
      Sojourn: "-",
      Soldier76: "--",
      Symmetra: "++",
      Torbjorn: "+",
      Tracer: "+",
      Widowmaker: "--",
      Zarya: "++"
    },
    archetype: ["Anchor", "Flanker", "Specialist"],
    difficulty: 1,
    skill: 1,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Reaper",
    type: "damage",
    counters: {
      Ana: "-",
      Dva: "-",
      Echo: "-",
      Junkrat: "-",
      JunkerQueen: "+",
      Orisa: "+",
      Pharah: "--",
      Reinhardt: "++",
      Roadhog: "++",
      Sombra: "+",
      Winston: "++",
      WreckingBall: "+",
      Zarya: "+"
    },
    archetype: ["Flanker", "Scrapper"],
    difficulty: 1,
    skill: 1,
    health: 250,
    armor: 0,
    shields: 0,
  },
  {
    name: "Sojourn",
    type: "damage",
    counters: {
      Echo: "+",
      Mercy: "-",
      Pharah: "+",
      Winston: "-",
      Zarya: "-"
    },
    archetype: ["Anchor", "Flanker", "Sniper"],
    difficulty: 0,
    skill: 0,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Soldier: 76",
    type: "damage",
    counters: {
      Baptiste: "+",
      Bastion: "+",
      Doomfist: "+",
      Echo: "+",
      Genji: "-",
      Pharah: "++",
      Reinhardt: "-",
      Sigma: "-",
      Torbjorn: "+",
      Winston: "-"
    },
    archetype: ["Anchor"],
    difficulty: 1,
    skill: 1,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Sombra",
    type: "damage",
    counters: {
      Ana: "+",
      Brigitte: "+",
      Dva: "+",
      Doomfist: "++",
      Echo: "+",
      Hanzo: "-",
      Junkrat: "-",
      Kiriko: "+",
      Lucio: "+",
      Cassidy: "-",
      Reaper: "-",
      Reinhardt: "+",
      Roadhog: "-",
      Symmetra: "+",
      Tracer: "++",
      Widowmaker: "+",
      WreckingBall: "++",
      Zarya: "+",
      Zenyatta: "+"
    },
    archetype: ["Flanker", "Specialist"],
    difficulty: 3,
    skill: 3,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Symmetra",
    type: "damage",
    counters: {
      Cassidy: "-",
      Pharah: "--",
      Sombra: "-",
      Winston: "--",
      Zarya: "-"
    },
    archetype: ["Specialist"],
    difficulty: 2,
    skill: 2,
    health: 100,
    armor: 0,
    shields: 125,
  },
  {
    name: "Torbjorn",
    //name: "Torbjörn",
    type: "damage",
    counters: {
      Ana: "-",
      Echo: "-",
      Genji: "+",
      Hanzo: "--",
      Junkrat: "-",
      Lucio: "+",
      Orisa: "-",
      Pharah: "-",
      Soldier: "-",
      Tracer: "+",
      Widowmaker: "--",
      Zarya: "--"
    },
    archetype: ["Anchor", "Scrapper", "Specialist"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 50,
    shields: 0,
  },
  {
    name: "Tracer",
    type: "damage",
    counters: {
      Bastion: "+",
      Brigitte: "-",
      Hanzo: "++",
      Junkrat: "-",
      Cassidy: "-",
      Pharah: "-",
      Sombra: "--",
      Torbjorn: "-",
      Zenyatta: "++"
    },
    archetype: ["Flanker", "Scrapper"],
    difficulty: 2,
    skill: 2,
    health: 150,
    armor: 0,
    shields: 0,
  },
  {
    name: "Widowmaker",
    type: "damage",
    counters: {
      Ana: "+",
      Ashe: "+",
      Bastion: "+",
      Dva: "--",
      Echo: "+",
      Genji: "--",
      Hanzo: "-",
      Junkrat: "++",
      Kiriko: "+",
      Cassidy: "+",
      Mei: "+",
      Mercy: "+",
      Orisa: "+",
      Pharah: "++",
      Reinhardt: "-",
      Sigma: "-",
      Sojourn: "-",
      Sombra: "-",
      Torbjorn: "+",
      Winston: "--",
      WreckingBall: "-"
    },
    archetype: ["Sniper"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Ana",
    type: "support",
    counters: {
      Ashe: "+",
      Baptiste: "+",
      Bastion: "+",
      Dva: "-",
      Echo: "+",
      Genji: "+",
      JunkerQueen: "-",
      Kiriko: "-",
      Lucio: "+",
      Moira: "+",
      Pharah: "+",
      Reaper: "+",
      Roadhog: "+",
      Sigma: "-",
      Sombra: "-",
      Widowmaker: "-",
      Winston: "-",
      WreckingBall: "+",
      Zenyatta: "+"
    },
    archetype: ["Main Healer", "Utility"],
    difficulty: 3,
    skill: 3,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Baptiste",
    type: "support",
    counters: {
      Ana: "-",
      Doomfist: "+",
      Dva: "+",
      Echo: "+",
      Genji: "-",
      Roadhog: "+",
      Sombra: "-",
      Soldier: "-"
    },
    archetype: ["Main Healer", "Utility"],
    difficulty: 3,
    skill: 3,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Brigitte",
    type: "support",
    counters: {
      Ashe: "-",
      Dva: "+",
      Genji: "+",
      Junkrat: "-",
      Pharah: "--",
      Reaper: "-",
      Reinhardt: "+",
      Sombra: "-",
      Tracer: "+",
      WreckingBall: "++"
    },
    archetype: ["Pocket Healer", "Utility"],
    difficulty: 1,
    skill: 1,
    health: 150,
    armor: 50,
    shields: 0,
  },
  {
    name: "Kiriko",
    type: "support",
    counters: {
      Ana: "+",
      Junkrat: "+",
      Sombra: "-",
      Widowmaker: "-"
    },
    archetype: ["Utility"],
    difficulty: 0,
    skill: 0,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Lucio",
    type: "support",
    counters: {
      Ashe: "-",
      Bastion: "-",
      Cassidy: "--",
      Mei: "+",
      Roadhog: "-",
      Pharah: "--",
      Sigma: "+",
      Sombra: "-",
      Torbjorn: "-"
    },
    archetype: ["Utility"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Mercy",
    type: "support",
    counters: {
      Ana: "-",
      Ashe: "-",
      Dva: "--",
      Genji: "--",
      Cassidy: "-",
      Roadhog: "-",
      Sojourn: "-",
      Widowmaker: "-"
    },
    archetype: ["Pocket Healer"],
    difficulty: 1,
    skill: 1,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Moira",
    type: "support",
    counters: {
      Ana: "-",
      Dva: "-",
      Orisa: "+",
      Reinhardt: "+"
    },
    archetype: ["Main Healer"],
    difficulty: 2,
    skill: 2,
    health: 200,
    armor: 0,
    shields: 0,
  },
  {
    name: "Zenyatta",
    type: "support",
    counters: {
      Ana: "-",
      Genji: "-",
      JunkerQueen: "+",
      Orisa: "+",
      Sombra: "-",
      Tracer: "--",
      Zarya: "+"
    },
    archetype: ["Pocket Healer", "Utility"],
    difficulty: 3,
    skill: 3,
    health: 50,
    armor: 0,
    shields: 150,
  }
];

exports.heroData = heroData;