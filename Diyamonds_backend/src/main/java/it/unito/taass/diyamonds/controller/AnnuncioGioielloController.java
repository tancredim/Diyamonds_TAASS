package it.unito.taass.diyamonds.controller;

import it.unito.taass.diyamonds.model.AnnuncioGioiello;
import it.unito.taass.diyamonds.repo.AnnuncioGioielloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
@CrossOrigin("*")
=======
@CrossOrigin(origins = "http://localhost:4200")
>>>>>>> d524c64d09250513251b2dfb7ead6bc13b5ae4c9
@RestController
@RequestMapping("/api/v1")
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

<<<<<<< HEAD
=======

>>>>>>> d524c64d09250513251b2dfb7ead6bc13b5ae4c9
    @GetMapping("/annunciGioielli/{id}")
    public AnnuncioGioiello getAnnuncioById(@PathVariable("id") long id) {
        Optional<AnnuncioGioiello> ag = annuncioGioielloRepository.findById(id);
        AnnuncioGioiello annuncioGioiello = ag.get();
        return annuncioGioiello;
    }
}
