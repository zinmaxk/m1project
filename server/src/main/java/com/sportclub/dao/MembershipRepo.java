package com.sportclub.dao;

import com.sportclub.model.Membership;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface MembershipRepo extends CrudRepository<Membership, Long> {
  Optional<Membership> findByCardLevelAndSession(String cardLevel, int session);
}
