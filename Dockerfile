FROM php:apache

RUN docker-php-ext-install mysqli

COPY api /var/www/html/api
