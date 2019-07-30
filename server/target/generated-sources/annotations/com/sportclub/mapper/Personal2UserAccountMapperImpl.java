package com.sportclub.mapper;

import com.sportclub.controller.request.CreateContractRequest.PersonalInfo;
import com.sportclub.model.UserAccount;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-07-29T09:39:11+0700",
    comments = "version: 1.3.0.Final, compiler: Eclipse JDT (IDE) 3.19.0.v20190713-1602, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class Personal2UserAccountMapperImpl implements Personal2UserAccountMapper {

    @Override
    public UserAccount fromPersonalInfo(PersonalInfo personalInfo) {
        if ( personalInfo == null ) {
            return null;
        }

        UserAccount userAccount = new UserAccount();

        return userAccount;
    }
}
