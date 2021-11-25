# CryptoCademy

## Commands

### Run development docker container(s):

```bash
$ bash docker/developer/startup
```

ODER

```bash
$ chmod +x docker/developer/startup #Nur einmal danach nur noch die nächste Zeile
$ ./docker/developer/startup
```

### Build VueJS frontend (hot reload):

```bash
$ bash npm-exec run watch
```

ODER

```bash
$ chmod +x npm-exec #Nur einmal danach nur noch die nächste Zeile
$ ./npm-exec run watch
```

## Routen

### Login

**URL** : `/api/auth/login`
**Method** : `POST`
**Auth required** : `No`

**Data constraints**

```json
{
  "email": "name@test.com",
  "password": "testtest"
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6OTg3NlwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNzg2MDkyMiwiZXhwIjoxNjM3ODY0NTIyLCJuYmYiOjE2Mzc4NjA5MjIsImp0aSI6IlRVZ2VYY0FLcFY5bXl4NmkiLCJzdWIiOjUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4h5MCim5mTBBBXtx27duEqqdqCCz7gGBASn6PNT_JgA",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": 5,
    "name": "Testname",
    "email": "name@test.com",
    "email_verified_at": null,
    "created_at": "2021-11-25T17:06:08.000000Z",
    "updated_at": "2021-11-25T17:06:08.000000Z"
  }
}
```

___

### Register

**URL**: `/api/auth/register`
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
    "name": "Magdalena",
    "email": "magdalena.tsolakissss@gmail.com",
    "updated_at": "2021-11-25T17:06:08.000000Z",
    "created_at": "2021-11-25T17:06:08.000000Z",
    "id": 5
  }
}
```

___
### Logout

**URL** : `/api/auth/logout`
**Method** : `POST`
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
  "message": "User successfully signed out"
}
```
___

### User

**URL** : `/api/auth/user-profile`
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
  "name": "TestName",
  "email": "name@test.com",
  "email_verified_at": null,
  "created_at": "2021-11-25T17:06:08.000000Z",
  "updated_at": "2021-11-25T17:06:08.000000Z"
}
```
