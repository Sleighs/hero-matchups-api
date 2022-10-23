# Hero Matchups API

A hero counter resource for Overwatch 2, Blizzard's team based multiplayer shooter.


## Resources

### Base Url
`https://hero-matchups-api.herokuapp.com`

The base url retrieves information about the API's available resources. 

### Requests 
All requests are GET requests and go over https. All responses return json data.

| Route | Data |
| ------------------- | --------------------------------- |
| `/` | Retrieves information about the API's resources  |
| `/heroes`           | Retrieves information for all heroes. |
| `/heroes/:heroName` | Retrieves information of the single specified `heroName` |
| `/random`           | Gets a single random hero |
| `/random/:type`     | Gets random hero of the specified `type` |
| `/type/:type`       | Returns all heroes of specified `type`. (types: tank, damage, support) |

### Hero Schema 
| Key | Type | Description |
| --- | ---- | ----------- |
| name | String | Name of character |
| type | String | Hero class (tank, damage, support) |
| counters | Object | List of matchups | 
