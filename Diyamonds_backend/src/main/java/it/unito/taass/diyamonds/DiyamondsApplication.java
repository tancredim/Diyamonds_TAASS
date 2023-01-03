package it.unito.taass.diyamonds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("it.unito.taass.diyamonds.model")
public class DiyamondsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiyamondsApplication.class, args);
		System.out.println("Test");
	}
}
