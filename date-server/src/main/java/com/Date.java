package com;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Date {

  @PersistenceContext
  private EntityManager em;

  @GetMapping("/date")
  public String CurrentDate() {
    // return current date and time
    return java.time.LocalDateTime.now().toString();
  }

  @GetMapping("/date-db")
  public String CurrentDbDate() {
    try {
      return em.createNativeQuery("SELECT NOW()").getSingleResult().toString();
    } catch (Exception e) {
      return "Error: " + e.getMessage();
    }
  }
}