package com.backend.springapi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.springapi.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
    
}
