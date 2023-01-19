cd ./ApiGateway
./mvnw -DskipTests=true clean package
cd ..
cd ./eurekaServer
./mvnw -DskipTests=true clean package
cd ..
docker-compose build
docker-compose up