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
  "id": 5,
  "balance": "1234567",
  "name": "mmuster",
  "email": "max.muster@trading.local",
  "updated_at": "2021-11-25T17:06:08.000000Z",
  "created_at": "2021-11-25T17:06:08.000000Z"
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
  "email": "",
  "name": "",
  "password": "",
  "password_confirmation": ""
}
```

###### Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "message": "User successfully registered",
  "user": {
    "id": 5,
    "balance": "1234567",
    "name": "mmuster",
    "email": "max.muster@trading.local",
    "updated_at": "2021-11-25T17:06:08.000000Z",
    "created_at": "2021-11-25T17:06:08.000000Z"
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
  "name": "",
  "email": ""
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "message": "User change successfully."
}

```

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
  "password": "",
  "new_password": "",
  "new_password_confirmation": ""
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
}
```

___
