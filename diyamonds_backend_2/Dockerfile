FROM adoptopenjdk/openjdk11
EXPOSE 8082
VOLUME /tmp
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar diyamonds_backend_2.jar
COPY target/diyamonds_backend_2.jar diyamonds_backend_2.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/diyamonds_backend_2.jar"]