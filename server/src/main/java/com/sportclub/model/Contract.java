package com.sportclub.model;

import java.time.Instant;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "contract")
@Data
public class Contract extends DbModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "user_account_id")
  private Long userAccountId;
  @Column(name = "membership_id")
  private Long membershipId;
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
  private Long signdedBy;
  @Column(name = "start_date")
  private Instant startDate;
  @Column(name = "end_date")
  private Instant endDate;
  @Column(name = "note")
  private String note;
  @Column(name = "amount")
  private Long amount;
  @Column(name = "currency")
  private String currency;
  @Column(name = "current_stage")
  private String currentStage;
}
