./mvnw -DskipTests=true clean package
docker-compose build
docker-compose up