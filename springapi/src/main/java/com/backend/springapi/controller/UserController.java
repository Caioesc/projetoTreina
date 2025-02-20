package com.backend.springapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springapi.exception.UserNotFoundException;
import com.backend.springapi.model.User;
import com.backend.springapi.repository.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("http://localhost:5173/exibir-curriculo")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
    
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
            .map(user -> {
                user.setNome(newUser.getNome());
                user.setTelefone(newUser.getTelefone());
                user.setRua(newUser.getRua());
                user.setNumero(newUser.getNumero());
                user.setCidade(newUser.getCidade());
                user.setBairro(newUser.getBairro());
                user.setCep(newUser.getCep());
                user.setUf(newUser.getUf());
                return userRepository.save(user);
            })
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado com o id: " + id));
    }

    @DeleteMapping("user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "Usuário com id " + id + " Foi deletado com sucesso!";
    }
}
