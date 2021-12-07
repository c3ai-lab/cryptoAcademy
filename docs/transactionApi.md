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
