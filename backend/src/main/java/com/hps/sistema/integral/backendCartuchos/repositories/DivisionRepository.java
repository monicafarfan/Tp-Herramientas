package com.hps.sistema.integral.backendCartuchos.repositories;

import com.hps.sistema.integral.backendCartuchos.models.entities.Division;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface DivisionRepository extends CrudRepository<Division,Long> {
    public Optional<Division> findByDescripcion(String descripcion);
}
