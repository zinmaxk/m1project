package com.sportclub.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "contract_owner_view")
@Data
public class ContractOwnerView extends DbModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long contract_id;
  @Column(name = "user_account_id")
  private Long userAccountId;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;
  @Column(name = "membership_type")
  private String membership_type;
  @Column(name = "card_level")
  private String cardLevel;
  @Column(name = "session")
  private int session;
  @Column(name = "price")
  private int price;
  @Column(name = "currency")
  private String currency;
  @Column(name = "start_date")
  private Instant startDate;
  @Column(name = "end_date")
  private Instant endDate;
  @Column(name = "sent_by")
  private Long sentBy;
  @Column(name = "sent_date")
  private Instant sentDate;
  @Column(name = "created_by")
  private Long createBy;
  @Column(name = "created_date")
  private Instant createDate;
  @Column(name = "approved_date")
  private Instant approvedDate;
  @Column(name = "approved_by")
  private Long approvedBy;
  @Column(name = "signed_date")
  private Instant signedDate;
  @Column(name = "signed_by")
  private Long signedBy;
  @Column(name = "rejected_date")
  private Instant rejectedDate;
  @Column(name = "rejected_by")
  private Long rejectedBy;


}
