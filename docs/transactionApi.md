### Trading Buy

**URL** : `/api/user/transaction/buy`
**Method** : `POST`
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
  "quantity": "20",
  "currency": "BNBBTC"
}
```

##### Success Response

**Code** : `201 OK`

**Content examples**

```json
[]
```

___

### Trading Buy

**URL** : `/api/user/transaction/sell`
**Method** : `POST`
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
  "quantity": "20",
  "currency": "BNBBTC"
}
```

##### Success Response

**Code** : `201 OK`

**Content examples**

```json
[]
```


___

### Trading Buy

**URL** : `/api/user/transaction`
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
}
```

##### Success Response

**Code** : `201 OK`

**Content examples**

```json
[
  {
    "quantity": 24,
    "symbol": "Dogecoin",
    "api_symbol": "DOGEUSDT",
    "price": 0.18,
    "action": "buy",
    "bought_at": "2021-12-07T12:07:23.000000Z"
  },
  {
    "quantity": 20,
    "symbol": "Dogecoin",
    "api_symbol": "DOGEUSDT",
    "price": 0.18,
    "action": "sell",
    "bought_at": "2021-12-07T12:18:08.000000Z"
  }
]
```
