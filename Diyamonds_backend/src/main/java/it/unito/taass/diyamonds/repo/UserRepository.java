package it.unito.taass.diyamonds.repo;


import it.unito.taass.diyamonds.model.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {
}