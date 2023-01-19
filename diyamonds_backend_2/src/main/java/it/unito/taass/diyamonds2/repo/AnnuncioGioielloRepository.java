package it.unito.taass.diyamonds2.repo;

import it.unito.taass.diyamonds2.model.AnnuncioGioiello;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnnuncioGioielloRepository extends CrudRepository<AnnuncioGioiello, Long> {

    @Override
    Optional<AnnuncioGioiello> findById(Long aLong);
}