package com.sportclub.dao;

import com.sportclub.model.UserAccount;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserAccount, Long> {
  Optional<UserAccount> findByUserName(String userName);
}
