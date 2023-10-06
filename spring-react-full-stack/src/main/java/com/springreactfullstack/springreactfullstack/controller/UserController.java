package com.springreactfullstack.springreactfullstack.controller;

import com.springreactfullstack.springreactfullstack.exception.UserNotFoundException;
import com.springreactfullstack.springreactfullstack.model.User;
import com.springreactfullstack.springreactfullstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
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
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id)); // exception error
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user->{
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));

    }
    @DeleteMapping("/user/{id}") //delete mapping
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User id "+id+ " is deleted.";
    }
}
