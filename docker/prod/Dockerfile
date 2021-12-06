FROM mats9798/laravel8-php-8-apache:latest

LABEL maintainer="Magdalena Tsolaki"

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y ssl-cert \
 && rm -r /var/lib/apt/lists/* \

RUN set -ex; \
    { \
        echo 'memory_limit = 2G'; \
        echo 'max_execution_time = 600'; \
        echo 'session.gc_maxlifetime = 7200'; \
        echo 'date.timezone = "'${TZ}'"'; \
    } > $PHP_INI_DIR/php.ini

COPY . /var/www/html/

# Optimizing
RUN php artisan optimize

RUN chown -R www-data:www-data /var/www/html

# enable ssl module and enable the default-ssl site
RUN a2enmod ssl \
 && a2ensite default-ssl
