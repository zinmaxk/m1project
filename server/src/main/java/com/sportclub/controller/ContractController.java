package com.sportclub.controller;

import com.sportclub.controller.request.CreateContractRequest;
import com.sportclub.exception.SportClubError;
import com.sportclub.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/contract")
public class ContractController {

  @Autowired
  ContractService contractService;

  @PostMapping
  public void createContract(CreateContractRequest request) {
    try {
      contractService.createContract(request);
    } catch (SportClubError e) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "Missing Field : " + e.getMessage());
    }
  }
}
