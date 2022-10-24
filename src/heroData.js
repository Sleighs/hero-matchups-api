// Includes pending updates
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
    difficulty: 2,
    skill: 2
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
    difficulty: 3,
    skill: 3
  },
  {
    name: "Junker Queen",
    type: "tank",
    counters: {
      Ana: "+",
      Bastion: "-",
      Reaper: "-",
      Mei: "-",
      Orisa: "-",
      Zenyatta: "+"
    },
    difficulty: 0,
    skill: 0
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
    difficulty: 2,
    skill: 2
  },
  {
    name: "Reinhardt",
    type: "tank",
    counters: {
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
    difficulty: 1,
    skill: 1
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
    difficulty: 1,
    skill: 1
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
      Soldier76: "+"
    },
    difficulty: 3,
    skill: 3
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
    difficulty: 2,
    skill: 2
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
    difficulty: 3,
    skill: 3
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
      Reaper: "-",
      Roadhog: "+",
      Torbjorn: "++",
      Zenyatta: "-"
    },
    difficulty: 3,
    skill: 3
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
      Soldier76: "+",
      Symmetra: "+",
      Widowmaker: "-",
      Winston: "-",
      WreckingBall: "-"
    },
    difficulty: 2,
    skill: 2
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
      JunkerQueen: "+",
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
    difficulty: 1,
    skill: 1
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
    difficulty: 2,
    skill: 2
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
    difficulty: 2,
    skill: 2
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
    difficulty: 3,
    skill: 3
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
    difficulty: 3,
    skill: 3
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
    difficulty: 2,
    skill: 2,
  },
  {
    name: "Mei",
    type: "damage",
    counters: {
      Ashe: "-",
      Dva: "+",
      JunkerQueen: "-",
      Lucio: "-",
      Cassidy: "+",
      Pharah: "-",
      Reinhardt: "++",
      Roadhog: "++",
      Widowmaker: "-",
      WreckingBall: "+",
      Zarya: "-"
    },
    difficulty: 3,
    skill: 3
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
      Widowmaker: "-"
    },
    difficulty: 1,
    skill: 1
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
    difficulty: 1,
    skill: 1
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
    difficulty: 0,
    skill: 0
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
    difficulty: 1,
    skill: 1
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
      Zenyatta: "+"
    },
    difficulty: 3,
    skill: 3
  },
  {
    name: "Symmetra",
    type: "damage",
    counters: {
      Cassidy: "-",
      Pharah: "--",
      Sombra: "-",
      Winston: "--",
      Reinhardt: "+",
      Zarya: "-"
    },
    difficulty: 2,
    skill: 2
  },
  {
    name: "Torbjorn",
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
    difficulty: 2,
    skill: 2
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
    difficulty: 2,
    skill: 2
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
      Pharah: "+",
      Reinhardt: "-",
      Sojourn: "-",
      Sombra: "-",
      Torbjorn: "+",
      Winston: "--",
      WreckingBall: "-"
    },
    difficulty: 2,
    skill: 2
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
    difficulty: 3,
    skill: 3
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
    difficulty: 3,
    skill: 3
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
    difficulty: 1,
    skill: 1
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
    difficulty: 0,
    skill: 0
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
    difficulty: 2,
    skill: 2
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
    difficulty: 1,
    skill: 1,
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
    difficulty: 2,
    skill: 2
  },
  {
    name: "Zenyatta",
    type: "support",
    counters: {
      Ana: "-",
      Genji: "-",
      JunkerQueen: "-",
      Orisa: "+",
      Sombra: "-",
      Tracer: "--",
      Zarya: "+"
    },
    difficulty: 3,
    skill: 3
  }
];

exports.heroData = heroData;