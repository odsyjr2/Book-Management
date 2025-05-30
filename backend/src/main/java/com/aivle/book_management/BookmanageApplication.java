package com.aivle.book_management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BookmanageApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookmanageApplication.class, args);
	}

}
