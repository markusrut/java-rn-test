package com;

import java.time.LocalDateTime;

public class DateDto {
  public final LocalDateTime serverDate;
  public final LocalDateTime dbDate;

  public DateDto(LocalDateTime serverDate, LocalDateTime dbDate) {
    this.serverDate = serverDate;
    this.dbDate = dbDate;
  }
}