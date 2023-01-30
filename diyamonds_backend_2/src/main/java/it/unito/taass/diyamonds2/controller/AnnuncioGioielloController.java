package it.unito.taass.diyamonds2.controller;

import it.unito.taass.diyamonds2.model.AnnuncioGioiello;
import it.unito.taass.diyamonds2.repo.AnnuncioGioielloRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/ms2")
public class AnnuncioGioielloController {

    @Autowired
    AnnuncioGioielloRepository annuncioGioielloRepository;

    @GetMapping("/annunciGioielli")
    public List<AnnuncioGioiello> getAllAnnunciGioielli() {
        System.out.println("Get all Annunci Gioielli");
        List<AnnuncioGioiello> annunciGioielli = new ArrayList<>();
        annuncioGioielloRepository.findAll().forEach(annunciGioielli::add);
        return annunciGioielli;
    }


    @GetMapping("/annunciGioielli/{idAnnuncioGioiello}")
    public AnnuncioGioiello getAnnuncioById(@PathVariable("idAnnuncioGioiello") long id) {
        Optional<AnnuncioGioiello> ag = annuncioGioielloRepository.findById(id);
        AnnuncioGioiello annuncioGioiello = ag.get();
        return annuncioGioiello;
    }

    @PostMapping("/annunciGioielli/creaAnnuncioGioiello")
    public AnnuncioGioiello addAnnuncioGioiello(@RequestBody AnnuncioGioiello annuncioGioiello) {
        System.out.println("Creazione Annuncio Gioiello");
        annuncioGioielloRepository.save(annuncioGioiello);
        return annuncioGioiello;
    }
}
