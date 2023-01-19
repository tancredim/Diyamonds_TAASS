package it.unito.taass.diyamonds.repo;


import it.unito.taass.diyamonds.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);
    //boolean existByEmail(String email);
}