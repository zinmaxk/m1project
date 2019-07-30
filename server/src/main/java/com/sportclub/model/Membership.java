package com.sportclub.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "membership")
public class Membership  extends DbModel{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;
  @Column(name = "type")
  private String type;
  @Column(name = "card_level")
  private String cardLevel;
  @Column(name = "session")
  private int session;
  @Column(name = "price")
  private int price;
  @Column(name = "currency")
  private String currency;
  @Column(name = "note")
  private String note;
}
