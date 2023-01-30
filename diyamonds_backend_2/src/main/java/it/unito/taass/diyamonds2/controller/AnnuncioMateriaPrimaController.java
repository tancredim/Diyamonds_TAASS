package it.unito.taass.diyamonds2.controller;

import it.unito.taass.diyamonds2.model.AnnuncioMateriaPrima;
import it.unito.taass.diyamonds2.repo.AnnuncioMateriaPrimaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/ms2")
public class AnnuncioMateriaPrimaController {

    @Autowired
    AnnuncioMateriaPrimaRepository annuncioMateriaPrimaRepository;

    @GetMapping("/annunciMateriaPrima")
    public List<AnnuncioMateriaPrima> getAllAnnunciMateriaPrima() {
        System.out.println("Get all AnnunciMateriaPrima");
        List<AnnuncioMateriaPrima> annunciMateriaPrima = new ArrayList<>();
        annuncioMateriaPrimaRepository.findAll().forEach(annunciMateriaPrima::add);
        return annunciMateriaPrima;
    }

    @GetMapping("/annunciMateriaPrima/{id}")
    public AnnuncioMateriaPrima getAnnuncioById(@PathVariable("id") long id) {
        Optional<AnnuncioMateriaPrima> ag = annuncioMateriaPrimaRepository.findById(id);
        AnnuncioMateriaPrima annuncioGioiello = ag.get();
        return annuncioGioiello;
    }

    @PostMapping("/annunciMateriaPrima/creaAnnuncioMateriaPrima")
    public AnnuncioMateriaPrima addAnnuncioMateriaPrima(@RequestBody AnnuncioMateriaPrima annuncioMateriaPrima) {
        System.out.println("Creazione Annuncio Materia Prima");
        annuncioMateriaPrimaRepository.save(annuncioMateriaPrima);
        return annuncioMateriaPrima;
    }
}