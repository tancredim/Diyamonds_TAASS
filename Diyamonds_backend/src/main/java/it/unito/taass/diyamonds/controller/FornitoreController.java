package it.unito.taass.diyamonds.controller;

import it.unito.taass.diyamonds.model.AnnuncioMateriaPrima;
import it.unito.taass.diyamonds.model.Fornitore;
import it.unito.taass.diyamonds.repo.AnnuncioMateriaPrimaRepository;
import it.unito.taass.diyamonds.repo.FornitoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FornitoreController {

    @Autowired
    FornitoreRepository fornitoreRepository;
    @Autowired
    AnnuncioMateriaPrimaRepository annuncioMateriaPrimaRepository;

    @GetMapping("/fornitori")
    public List<Fornitore> getAllVenditori() {
        System.out.println("Get all Fornitori");
        List<Fornitore> fornitori = new ArrayList<>();
        fornitoreRepository.findAll().forEach(fornitori::add);
        return fornitori;
    }

    @PostMapping("/fornitori/{id}/creaAnnuncioMateriaPrima")
    public AnnuncioMateriaPrima addAnnuncioMateriaPrima(@PathVariable("id") long id, @RequestBody AnnuncioMateriaPrima annuncioMateriaPrima) {
        System.out.println("Creazione Annuncio Materia Prima");
        Optional<Fornitore> f = fornitoreRepository.findById(id);
        Fornitore fornitore = f.get();
        annuncioMateriaPrima.setIdFornitore(id);
        fornitore.getAnnunciMateriaPrima().add(annuncioMateriaPrima);
        annuncioMateriaPrimaRepository.save(annuncioMateriaPrima);
        fornitoreRepository.save(fornitore);
        return annuncioMateriaPrima;
    }

    @DeleteMapping("/fornitori/{id}")
    public ResponseEntity<String> deleteVenditore(@PathVariable("id") long id) {
        System.out.println("Delete ListaAnnunci with ID = " + id + "...");
        fornitoreRepository.deleteById(id);
        return new ResponseEntity<>("Fornitore has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/fornitori/delete")
    public ResponseEntity<String> deleteAllVenditori() {
        System.out.println("Delete All Fornitori...");
        fornitoreRepository.deleteAll();
        return new ResponseEntity<>("All Fornitori have been deleted!", HttpStatus.OK);
    }
}
