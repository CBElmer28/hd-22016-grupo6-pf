package com.example.login_backend.controller;

import com.example.login_backend.model.User;
import com.example.login_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        boolean success = userService.login(credentials.get("username"), credentials.get("password"));
        return success ? ResponseEntity.ok("Login exitoso") :
                ResponseEntity.status(401).body("Credenciales inválidas");
    }
}
