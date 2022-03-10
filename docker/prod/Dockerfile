FROM php:8.0-apache

LABEL maintainer="Magdalena Tsolaki"

RUN apt-get clean
RUN apt-get update

ARG NODE_VERSION=14

ENV TZ=Europe/Berlin

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN requirements="tzdata gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python2 vim libmcrypt-dev libc-client-dev libkrb5-dev libmcrypt4 libcurl3-dev libxml2-dev libzip-dev zip msmtp cron build-essential libssl-dev libpq-dev libonig-dev" \
    && apt-get update && apt-get install -y --no-install-recommends $requirements && rm -rf /var/lib/apt/lists/* \
    && mkdir -p ~/.gnupg \
    && chmod 600 ~/.gnupg \
    && echo "disable-ipv6" >> ~/.gnupg/dirmngr.conf \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E5267A6C \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C300EE8C \
    && curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs

RUN docker-php-ext-install bcmath ctype fileinfo mbstring pdo pdo_mysql soap mysqli exif gettext opcache pcntl shmop sockets sysvmsg sysvsem sysvshm tokenizer xml zip
RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl && docker-php-ext-install imap
RUN docker-php-ext-configure calendar && docker-php-ext-install calendar

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN set -ex; \
    { \
        echo 'memory_limit = 2G'; \
        echo 'max_execution_time = 600'; \
        echo 'session.gc_maxlifetime = 7200'; \
        echo 'date.timezone = "'${TZ}'"'; \
    } > $PHP_INI_DIR/php.ini

# And clean up the image
RUN apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN a2enmod rewrite
RUN a2enmod headers

RUN service apache2 restart

RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

VOLUME ["/var/www/html", "/var/log/apache2", "/etc/apache2"]
EXPOSE 80 443
USER root
COPY start.sh /usr/local/bin/start

COPY ../build /var/www/html/

# Optimizing
RUN php artisan optimize

RUN chown www-data:www-data -R /var/www/html
RUN chmod u+x /usr/local/bin/start


CMD ["/usr/local/bin/start"]
