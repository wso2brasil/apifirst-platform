FROM mysql:5.7.8
ENV MYSQL_ROOT_PASSWORD=petclinic
COPY src/main/resources/db/mysql/schema.sql /docker-entrypoint-initdb.d/1_schema.sql
COPY src/main/resources/db/mysql/data.sql /docker-entrypoint-initdb.d/2_data.sql

