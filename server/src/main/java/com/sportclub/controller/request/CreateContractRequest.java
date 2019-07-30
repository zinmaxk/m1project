package com.sportclub.controller.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.Instant;
import lombok.Getter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
public class CreateContractRequest {

  private PersonalInfo personalInfo;
  private MembershipInfo membershipInfo;

  @JsonIgnoreProperties(ignoreUnknown = true)
  @Getter
  public static class PersonalInfo {
    private String email;
    private String firstName;
    private String lastName;
    private Instant dob;
    private String phone;
    private String address;
    private String country;
    private String city;
    private String category;
  }

  @JsonIgnoreProperties(ignoreUnknown = true)
  @Getter
  public static class MembershipInfo {
    private int session;
    private String cardType;
    private int price;
  }
}
