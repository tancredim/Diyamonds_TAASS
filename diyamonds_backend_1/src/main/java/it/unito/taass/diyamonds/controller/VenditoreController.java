package it.unito.taass.diyamonds.controller;

import it.unito.taass.diyamonds.model.AnnuncioGioiello;
import it.unito.taass.diyamonds.model.Venditore;
import it.unito.taass.diyamonds.repo.AnnuncioGioielloRepository;
import it.unito.taass.diyamonds.repo.VenditoreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/ms1")
public class VenditoreController implements RabbitListenerConfigurer {

    @Autowired
    VenditoreRepository venditoreRepository;
    @Autowired
    AnnuncioGioielloRepository annuncioGioielloRepository;

    @GetMapping("/venditori")
    public List<Venditore> getAllVenditori() {
        System.out.println("Get all Venditori");
        List<Venditore> venditori = new ArrayList<>();
        venditoreRepository.findAll().forEach(venditori::add);
        return venditori;
    }

    @PostMapping("/venditori/{id}/creaAnnuncioGioiello")
    public AnnuncioGioiello addAnnuncioGioiello(AnnuncioGioiello annuncioGioiello) {
        System.out.println("Creazione Annuncio Gioiello");

        Optional<Venditore> v = venditoreRepository.findById(annuncioGioiello.getIdVenditore());
        Venditore venditore = v.get();
        venditore.getAnnunciGioelli().add(annuncioGioiello);

        venditoreRepository.save(venditore);
        return annuncioGioiello;
    }

    @DeleteMapping("/venditori/{id}")
    public ResponseEntity<String> deleteVenditore(@PathVariable("id") long id) {
        System.out.println("Delete ListaAnnunci with ID = " + id + "...");
        venditoreRepository.deleteById(id);
        return new ResponseEntity<>("Venditore has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/venditori/delete")
    public ResponseEntity<String> deleteAllVenditori() {
        System.out.println("Delete All Venditori...");
        venditoreRepository.deleteAll();
        return new ResponseEntity<>("All Venditori have been deleted!", HttpStatus.OK);
    }



    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {
    }

    @RabbitListener(queues = "${spring.rabbitmq.queue}")
    public void receivedMessage(AnnuncioGioiello annuncioGioiello) {
        System.out.println("Message Received is.. " + annuncioGioiello.toString());
        Optional<Venditore> v = venditoreRepository.findById(annuncioGioiello.getIdVenditore());
        Venditore venditore = v.get();
        venditore.getAnnunciGioelli().add(annuncioGioiello);

        venditoreRepository.save(venditore);

    }

}
