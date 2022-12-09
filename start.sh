cd ./Diyamonds_backend
./mvnw -DskipTests=true clean package
cd ..
docker-compose build
docker-compose up