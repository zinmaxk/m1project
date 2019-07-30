package com.sportclub.controller;

import com.sportclub.model.UserAccount;
import com.sportclub.service.UserService;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired UserService userService;

  @PostMapping("/sign-up")
  public ResponseEntity signUp(@RequestBody UserAccount user) {
    try {
      userService.registerUser(user);
      return ResponseEntity.ok().build();
    }catch (Exception e){
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "Missing Field : " + ExceptionUtils.getMessage(e));
    }
  }
}
