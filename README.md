# Hero Matchups API

A hero counter strategy resource for Overwatch 2, Blizzard's team based multiplayer shooter. Includes GET requests to retrieve a random hero or a random hero by hero type. Try demo out at https://hero-pick-app.web.app/ (or https://heromatchups.com)

### Base Url
`https://hero-matchups-api.netlify.app/.netlify/functions/api`

The base url retrieves information about the API's available resources. 

### Requests 
All requests are GET requests and go over https. All responses return json data. Hero names can be entered normally, all lowercase or without spaces.

| Route | Data |
| ------------------- | --------------------------------- |
| `/` | Retrieves information about the API's resources  |
| `/heroes`           | Retrieves information for all heroes. |
| `/heroes/:heroName` | Retrieves information of the single specified `heroName` |
| `/random`           | Gets a single random hero |
| `/random/:type`     | Gets random hero of the specified `type` |
| `/type/:type`       | Returns all heroes of specified `type`. (types: tank, damage, support) |
| `/archetype` | Lists all available hero archetypes |
| `/archetype/:archetypeName` | Retrieves all heroes of the selected archetype |


### Hero Schema 
| Key | Type | Description |
| --- | ---- | ----------- |
| name | String | Name of character |
| type | String | Hero class (tank, damage, support) |
| counters | Object | List of matchups | 
| archetype | Array | List of hero archetypes (Tank: Anchor, Initiator, First Responder, Damage Heavy; Damage: Anchor, Flanker, Sniper, Scrapper, Specialist; Suppport: Main Healer, Pocket Healer, Utility) |

## Future Releases
* Add character characteristics data 
* Duo matchup information 
* Best counter search feature 
* Lineup analyzer
