package com.springreactfullstack.springreactfullstack.controller;

import com.springreactfullstack.springreactfullstack.model.User;
import com.springreactfullstack.springreactfullstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository; //from the UserRepository interface

    @PostMapping("/user") //PostMethod
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser); //saving the User data using the userRepo method
    }
    @GetMapping("/users") //GetMethod
    List<User> getAllUsers(){ //method for getting all users
        return userRepository.findAll(); //JpaRep method
    }

}
