package it.unito.taass.diyamonds.repo;

import it.unito.taass.diyamonds.model.Venditore;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface VenditoreRepository extends CrudRepository<Venditore, Long> {

    @Override
    Optional<Venditore> findById(Long aLong);
}
