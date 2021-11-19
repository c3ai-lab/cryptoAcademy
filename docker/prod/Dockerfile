FROM mats9798/laravel8-php-8-apache:latest

LABEL maintainer="Magdalena Tsolaki"

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN set -ex; \
    { \
        echo 'memory_limit = 2G'; \
        echo 'max_execution_time = 600'; \
        echo 'session.gc_maxlifetime = 7200'; \
        echo 'date.timezone = "'${TZ}'"'; \
    } > $PHP_INI_DIR/php.ini

COPY . .
RUN rm -rf .editorconfing .git .github .gitignore .styleci.yml README.md composer-exec composer.json composer.lock docker npm-exec package-lock.json package.json php-exec tests webpack.mix.js
RUN composer update
RUN composer install --no-interaction --optimize-autoloader --no-dev
# Optimizing Configuration loading
RUN php artisan config:cache
# Optimizing Route loading
RUN php artisan route:cache
# Optimizing View loading
RUN php artisan view:cache

RUN chown -R www-data:www-data /var/www/html
