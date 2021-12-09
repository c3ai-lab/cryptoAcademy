### Get Current User

**URL** : `/api/user`
**Method** : `GET`
**Auth required** : `YES`

**Header constraints**

```json
{
  "Authorization": "Bearer __JWT__"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json

{
  "id": 1,
  "name": "mmuster",
  "email": "max.muster@trading.local",
  "balance": 1000000,
  "created_at": "2021-12-06T13:12:10.000000Z",
  "updated_at": "2021-12-06T13:12:10.000000Z"
}
```

___

### Create User

**URL**: `/api/user`
**Method**: `POST`
**Auth required**: `No`

**Data constraints**

```json
{
  "name": "mmuster",
  "email": "max.muster@trading.local",
  "password": "start_01",
  "password_confirmation": "start_01"
}
```

###### Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "message": "User successfully registered",
  "user": {
    "id": 3,
    "name": "mmuster",
    "email": "max.muster@trading.local",
    "balance": "1000000",
    "created_at": "2021-12-06T13:29:05.000000Z",
    "updated_at": "2021-12-06T13:29:05.000000Z"
  }
}
```

___

### Update Currentuser

**URL** : `/api/user`
**Method** : `PUT`
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
  "name": "mmuster",
  "email": "max.muster@trading.local"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "message": "User change successfully.",
  "user": {
    "id": 1,
    "name": "mmuster",
    "email": "max.muster@trading.local",
    "balance": 1000000,
    "created_at": "2021-12-06T13:12:10.000000Z",
    "updated_at": "2021-12-06T13:39:38.000000Z"
  }
}
```

OR Validation Error

```json
{
  "name": [
    "The name has already been taken."
  ],
  "email": [
    "The email has already been taken."
  ]
  ...
  ...
  ...
}
```

___

### DELETE Current User

**URL** : `/api/user`
**Method** : `DELETE`
**Auth required** : `YES`

**Header constraints**

```json
{
  "Authorization": "Bearer __JWT__"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json

{
  "message": "User successfully deleted"
}
```

___

### Reset Password

wird automatisch zurückgesetzt und das neue Password an die genannte Emailadresse gesendet

**URL** : `/api/user/password/reset`
**Method** : `POST`
**Auth required** : `NO`

**Data constraints**

```json
{
  "email": "max.muster@trading.local"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json

{
  "message": "Password reset successfully"
}
```

___

### Update Currentuser Password

**URL** : `/api/user/password`
**Method** : `PUT`
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
  "password": "start_01",
  "new_password": "start_02",
  "new_password_confirmation": "start_02"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "message": "Password change successfully."
}

```

OR Validation Error

```json
{
  "field_name": [
    "The given password doesn't match with old password."
  ],
  "password": [
    "The password field is required."
  ],
  "password": [
    "The given password doesn't match with old password."
  ],
  "new_password": [
    "The new password field is required."
  ],
  "new_password": [
    "The new password must be at least 6 characters."
  ],
  "new_password": [
    "The new password confirmation does not match."
  ]
  ...
  ...
  ...
}
```

___

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