FROM adoptopenjdk/openjdk11
VOLUME /tmp
ARG DEPENDENCY=target
ADD ${DEPENDENCY}/*.jar diyamonds_backend_1.jar
COPY target/diyamonds_backend_1.jar diyamonds_backend_1.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/diyamonds_backend_1.jar"]
