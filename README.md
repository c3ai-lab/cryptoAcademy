# CryptoCademy

## SETUP FOR LOCAL DEVELOPMENT
(https://laravel.com/docs/9.x/sail)


### .env File erstellen
`$ cp developer.env .env`

### Composer install (einmalig) zum Installieren aller dependencies
`$ docker run --rm --interactive --tty --volume $PWD:/app --volume ${COMPOSER_HOME:-$HOME/.composer}:/tmp composer install`

### Alias für SAIL erstellen
`$ alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`

### Zum startet der Anwendung
`$ sail up OR sail up -d`

#### Cryptocademy ist über: http://localhost:8123 erreichbar

#### Mailhog der der alle Mails der Anwendung fängt über: http://localhost:8025 


## Backend
### QUEUE
`$ sail artisan queue:work`

### Migration
`$ sail artian migrate --force`


## Frontend
### Build VueJS frontend (hot reload):
`$ sail npm run watch`

### Build VueJS frontend (production):
`$ sail npm run prod`


## Rest API Routen

[Auth](docs/authApi.md)

[User](docs/userApi.md)

[Transacion](docs/favoriteApi.md)

[Transacion](docs/transactionApi.md)

[News Feed](docs/newsFeedApi.md)

___
