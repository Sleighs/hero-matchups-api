# Hero Matchups API

A hero counter resource for Overwatch 2, Blizzard's team based multiplayer shooter.


## Resources

### Base Url
`https://hero-matchups-api.herokuapp.com`
The base url retrieves information about the API's available resources. All requests are GET requests and go over https. All responses will return data in json.

### Requests 
| ------------------- | --------------------------------- |
| `/heroes`           | Gets info for all heroes. |
| `/heroes/:heroName` | Gets info of specified `heroName` |
| `/random`           | Gets a random hero |
| `/random/:type`     | Gets a random hero the specified `type` |
| `/type/:type`       | Gets all heros of specified `type`. (types: tank, damage, support) |