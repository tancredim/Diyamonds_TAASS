# TAASSpringbootPostgresDocker
 

modify application.properties with correct login and PWD for Postgres

Position in project directory root

 ./mvnw -DskipTests=true clean package
docker-compose build
docker-compose up 
o
/start.sh

http://localhost:8080/ or using Postman:
get: http://localhost:8080/api/v1/users
http://localhost:8080/api/v1/users/add 
 
 Body: 
 {
 "username": "renata",  
 }
