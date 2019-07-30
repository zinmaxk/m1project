package com.sportclub.model;

import java.time.Instant;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_account")
public class UserAccount {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column
  private Long id;
  @Column(name = "user_name")
  private String userName;
  @Column
  private String email;
  @Column
  private String password;
  @Column
  private Integer status;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;
  @Column(name = "date_of_birth")
  private Instant dob;
  @Column(name = "phone")
  private String phone;
  @Column(name = "address")
  private String address;
  @Column(name = "city")
  private String city;
  @Column(name = "country")
  private String country;
  @Column
  private Integer category;
}
