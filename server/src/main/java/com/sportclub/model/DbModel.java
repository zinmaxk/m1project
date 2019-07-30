package com.sportclub.model;

import java.time.Instant;
import javax.persistence.Column;

public class DbModel {
  @Column(name = "insert_timestamp")
  private Instant insertTimestamp;
}
