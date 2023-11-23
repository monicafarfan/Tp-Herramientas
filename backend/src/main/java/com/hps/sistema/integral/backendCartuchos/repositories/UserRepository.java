package com.hps.sistema.integral.backendCartuchos.repositories;

import com.hps.sistema.integral.backendCartuchos.models.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Long> {
    public Optional<User> findByUsername(String username);
}
