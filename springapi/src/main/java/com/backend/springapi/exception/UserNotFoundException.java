package com.backend.springapi.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("Não foi encontrado usuário com id " + id);
    }
    
}
