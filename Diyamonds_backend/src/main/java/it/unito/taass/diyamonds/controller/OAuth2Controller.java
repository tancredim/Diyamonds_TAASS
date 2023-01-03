package it.unito.taass.diyamonds.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class OAuth2Controller {

    @GetMapping
    public Object currentUser( ) {
        return null;
    }

}
