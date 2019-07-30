package com.sportclub.security;

import static com.sportclub.SecurityConstants.EXPIRATION_TIME;
import static com.sportclub.SecurityConstants.HEADER_STRING;
import static com.sportclub.SecurityConstants.SECRET;
import static com.sportclub.SecurityConstants.TOKEN_PREFIX;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.sportclub.model.UserAccount;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@AllArgsConstructor
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
  private AuthenticationManager authenticationManager;

  @Override
  public Authentication attemptAuthentication(
      HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
    try {
      UserAccount user = new ObjectMapper().readValue(request.getInputStream(), UserAccount.class);
      return authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword()));
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  @Override
  protected void successfulAuthentication(
      HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth)
      throws IOException, ServletException {
    User user = (User) auth.getPrincipal();
    String token =
        Jwts.builder()
            .setSubject(user.getUsername())
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
            .signWith(SignatureAlgorithm.HS512, SECRET)
            .compact();
    res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);

    String json = new Gson().toJson(user);
    res.setContentType("application/json");
    res.setCharacterEncoding("UTF-8");
    res.getWriter().write(json);
  }
}
