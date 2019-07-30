package com.sportclub.service;

import com.sportclub.controller.request.CreateContractRequest;
import com.sportclub.dao.ContractRepo;
import com.sportclub.dao.MembershipRepo;
import com.sportclub.exception.SportClubError;
import com.sportclub.model.Contract;
import com.sportclub.model.Membership;
import com.sportclub.model.UserAccount;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractService {
  @Autowired
  UserService userService;
  @Autowired
  MembershipRepo membershipRepo;
  @Autowired
  ContractRepo contractRepo;

  public Contract createContract(CreateContractRequest request) throws SportClubError {
    UserAccount userAccount = userService.createEntity(request.getPersonalInfo());
    Optional<Membership> membership = membershipRepo.findByCardLevelAndSession(request.getMembershipInfo().getCardType(),
        request.getMembershipInfo().getSession());
    if(!membership.isPresent()) {
      throw new SportClubError("Membership not found");
    }
    Contract contract = new Contract();
    contract.setUserAccountId(userAccount.getId());
    contract.setMembershipId(membership.get().getId());
    return contractRepo.save(contract);
  }
}
