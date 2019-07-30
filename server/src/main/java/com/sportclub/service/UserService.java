package com.sportclub.service;

import com.sportclub.controller.request.CreateContractRequest.PersonalInfo;
import com.sportclub.dao.UserRepo;
import com.sportclub.mapper.Personal2UserAccountMapper;
import com.sportclub.model.UserAccount;
import java.io.IOException;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired BCryptPasswordEncoder bCryptPasswordEncoder;
  @Autowired UserRepo userRepo;
  @Autowired AuthenticationManager authenticationManager;

  public UserAccount registerUser(UserAccount user) {
    user.setStatus(1);
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    return userRepo.save(user);
  }

  public Authentication signIn(String userName, String password) {
      try {
        return authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(userName, password) );
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
  }

  public UserAccount createEntity(PersonalInfo personalInfo) {
    UserAccount userAccount = Mappers.getMapper(Personal2UserAccountMapper.class).fromPersonalInfo(personalInfo);
    userAccount.setPassword("$2a$10$8jkFNE5loyqa2YP0TNbFd./9T5wLoEDy4it4BcVcEG/IsYW2.nZO.");
    return userRepo.save(userAccount);
  }
}
