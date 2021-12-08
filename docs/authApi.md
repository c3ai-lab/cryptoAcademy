### Login

**URL** : `/api/auth/login`
**Method** : `POST`
**Auth required** : `No`

**Data constraints**

```json
{
  "email": "max.muster@trading.local",
  "password": "start_01"
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
    "id": 1,
    "name": "mmuser",
    "email": "max.muster@trading.local",
    "email_verified_at": null,
    "created_at": "2021-11-25T17:06:08.000000Z",
    "updated_at": "2021-11-25T17:06:08.000000Z"
  }
}

```

OR Validation Error
Response: 401
```json
{
  "status": "We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address."
}
```

___

### Refresh Token

**URL** : `/api/auth/refresh`
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
