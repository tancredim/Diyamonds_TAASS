package it.unito.taass.diyamonds.controller;


import it.unito.taass.diyamonds.repo.FornitoreRepository;
import it.unito.taass.diyamonds.repo.UserRepository;
import it.unito.taass.diyamonds.repo.VenditoreRepository;
import it.unito.taass.diyamonds.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    VenditoreRepository venditoreRepository;
    @Autowired
    FornitoreRepository fornitoreRepository;

    @PostMapping(value = "/users/add")
    public User addUser(@RequestBody User user) {
        System.out.println(user.toString());
        System.out.println("Add new user");
        User _user = new User();
        if (user.getIsVenditoreFornitore()==0) {
            _user = userRepository.save(user);
            return _user;
        } else if (user.getIsVenditoreFornitore()==1) {
            _user = venditoreRepository.save(new Venditore(
                    user.getId(),
                    user.getUsername(),
                    user.getNome(),
                    user.getCognome(),
                    user.getEmail(),
                    user.getPassword(),
                    user.getIsVenditoreFornitore(),
                    user.getTelefono(),
                    new ArrayList<AnnuncioGioiello>()));
            return _user;
        } else if (user.getIsVenditoreFornitore()==2) {
            _user = fornitoreRepository.save(new Fornitore(
                    user.getId(),
                    user.getUsername(),
                    user.getNome(),
                    user.getCognome(),
                    user.getEmail(),
                    user.getPassword(),
                    user.getIsVenditoreFornitore(),
                    user.getTelefono(),
                    new ArrayList<AnnuncioMateriaPrima>()));
            return _user;
        }
        return _user;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        System.out.println("Get all users");
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
        System.out.println("Delete ListaAnnunci with ID = " + id + "...");
        userRepository.deleteById(id);
        return new ResponseEntity<>("ListaAnnunci has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/users/delete")
    public ResponseEntity<String> deleteAllUsers() {
        System.out.println("Delete All Users...");
        userRepository.deleteAll();
        return new ResponseEntity<>("All users have been deleted!", HttpStatus.OK);
    }

    /* TODO
    findByUsername
    findByEmail
    */

}
