package com;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Date {

  @PersistenceContext
  private EntityManager em;

  @GetMapping("/date")
  public DateDto GetDate() {
    final var dbDateString = em.createNativeQuery("SELECT NOW()").getSingleResult().toString();
    final var dbDate = LocalDateTime.parse(dbDateString, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S"));

    return new DateDto(LocalDateTime.now(), dbDate);
  }

  @GetMapping("/date-server")
  public LocalDateTime GetDateServer() {
    return LocalDateTime.now();
  }
}