FROM openjdk:13-alpine
RUN addgroup -S spring && adduser -S spring -G spring
VOLUME /tmp
EXPOSE 8081
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar diyamonds_backend_1.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/diyamonds_backend_1.jar"]
