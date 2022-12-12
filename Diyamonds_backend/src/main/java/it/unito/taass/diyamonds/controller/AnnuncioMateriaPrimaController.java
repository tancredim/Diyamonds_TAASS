package it.unito.taass.diyamonds.controller;

import it.unito.taass.diyamonds.model.AnnuncioMateriaPrima;
import it.unito.taass.diyamonds.repo.AnnuncioMateriaPrimaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
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
}