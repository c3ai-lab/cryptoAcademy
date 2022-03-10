FROM registry.cryptocademy.app/laravel8-php-8-apache:latest

LABEL maintainer="Magdalena Tsolaki"

RUN apt-get update && rm -r /var/lib/apt/lists/*

COPY . /var/www/html/

# Optimizing
RUN php artisan optimize

RUN chown www-data:www-data -R /var/www/html
