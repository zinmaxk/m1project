package com.sportclub.service;

import static java.util.Collections.emptyList;

import com.sportclub.dao.UserRepo;
import com.sportclub.model.UserAccount;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service(value = "userDetailServiceImpl")
public class UserDetailServiceImpl implements UserDetailsService {

  @Autowired
  UserRepo userRepo;

  @Override
  public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

    Optional<UserAccount> applicationUser = userRepo.findByUserName(userName);
    if (!applicationUser.isPresent()) {
      throw new UsernameNotFoundException(userName);
    }
    List<GrantedAuthority> authorities = new ArrayList<>();
    authorities.add(new SimpleGrantedAuthority("user"));
    return new User(applicationUser.get().getUserName(), applicationUser.get().getPassword(), authorities);  }
}
