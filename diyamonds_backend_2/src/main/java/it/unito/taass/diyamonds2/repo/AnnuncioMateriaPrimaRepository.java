package it.unito.taass.diyamonds2.repo;

import it.unito.taass.diyamonds2.model.AnnuncioGioiello;
import it.unito.taass.diyamonds2.model.AnnuncioMateriaPrima;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnnuncioMateriaPrimaRepository extends CrudRepository<AnnuncioMateriaPrima, Long> {
    @Override
    Optional<AnnuncioMateriaPrima> findById(Long aLong);
}
