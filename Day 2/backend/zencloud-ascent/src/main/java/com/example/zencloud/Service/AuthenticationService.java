package com.example.zencloud.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.zencloud.Dto.request.AuthenticationRequest;
import com.example.zencloud.Dto.request.RegisterRequest;
import com.example.zencloud.Dto.response.AuthenticationResponse;
import com.example.zencloud.Model.Role;
import com.example.zencloud.Model.User;
import com.example.zencloud.Repository.UserRepository;
import java.util.HashMap;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                var user = User
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.USER)
                                .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public ResponseEntity<HashMap<String, Object>> authenticate(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                HashMap<String, Object> map = new HashMap<>();
                map.put("token", jwtToken);
                map.put("id", user.getId());
                return ResponseEntity.ok(map);
        }

}
