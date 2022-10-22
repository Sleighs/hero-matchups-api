# Hero Matchups API

A hero counter resource for Overwatch 2, Blizzard's team based multiplayer shooter.

`https://hero-matchups-api.herokuapp.com/`

## Get Requests

### `https://hero-matchups-api.herokuapp.com/`
Returns all heroes.

[
    {
        "_id": "6353d5156204d485dcb7f22a",
        "name": "D.Va",
        "type": "tank",
        "counters": {
            "Ana": "+",
            "Ashe": "+",
            "Bastion": "+",
            "Brigitte": "-",
            "Doomfist": "-",
            "Hanzo": "++",
            "Junkrat": "-",
            "McCree": "+",
            "Mei": "-",
            "Mercy": "++",
            "Moira": "+",
            "Pharah": "+",
            "Reaper": "+",
            "Sombra": "-",
            "Widowmaker": "++",
            "Zarya": "--"
        },
        "__v": 0
    },
    ...
]

### `/heroes`
Gets info for all heroes.

### `/heroes/:heroName`
Gets info of specified `heroName`

### `/random`
Gets a random hero

### `/random/:type`
Gets a random hero the specified `type`

### `/type/:type`
Gets all heros of specified `type`. (types: tank, damage, support)