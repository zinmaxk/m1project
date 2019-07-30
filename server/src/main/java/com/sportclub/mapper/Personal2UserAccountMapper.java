package com.sportclub.mapper;

import com.sportclub.controller.request.CreateContractRequest.PersonalInfo;
import com.sportclub.model.UserAccount;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface Personal2UserAccountMapper {
  UserAccount fromPersonalInfo(PersonalInfo personalInfo);
}
