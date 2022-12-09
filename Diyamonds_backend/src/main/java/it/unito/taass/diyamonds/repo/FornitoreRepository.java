package it.unito.taass.diyamonds.repo;

import it.unito.taass.diyamonds.model.Fornitore;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FornitoreRepository extends CrudRepository<Fornitore, Long> {

    @Override
    Optional<Fornitore> findById(Long aLong);
}
