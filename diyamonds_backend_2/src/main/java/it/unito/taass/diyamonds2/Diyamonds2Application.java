package it.unito.taass.diyamonds2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class Diyamonds2Application {

	public static void main(String[] args) {
		SpringApplication.run(Diyamonds2Application.class, args);
	}

}
