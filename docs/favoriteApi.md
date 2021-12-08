### Get All Symbols with Favorite Flag of User

Der Parameter `favorite` lässt eine Einschränkung über den Key `is_favorite` des Objekts durchführen Ohne den
Parameter `favorite` wird eine 100% Liste zurückgegeben sowohl `is_favorite` = `true` und `false` ist enthalten.

**URL** : `/api/user/favorites?favorite=1`
**Method** : `GET`
**Auth required** : `YES`

**Header constraints**

```json
{
  "Authorization": "Bearer __JWT__"
}
```

**Data constraints**

```json
{
  "favorite": "0 OR 1 OR WITHOUT"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTCUSDT",
    "is_favorite": true
  },
  {
    "id": 2,
    "name": "Ethereum",
    "symbol": "ETHUSDT",
    "is_favorite": false
  },
  {
    "id": 3,
    "name": "Binance Coin",
    "symbol": "BNBUSDT",
    "is_favorite": false
  }
]
```

___
