package it.unito.taass.diyamonds.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.Value;
import it.unito.taass.diyamonds.dto.TokenDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;

@RestController
@RequestMapping("/oauth2")
@CrossOrigin
public class OAuth2Controller {

    @Value("@{spring.security.oauth2.client.registration.google.client-id}")
    String googleClientId;

    @PostMapping("/google")
    public ResponseEntity<?> google(@RequestBody TokenDTO tokenDto) throws IOException {
        final NetHttpTransport transport = new NetHttpTransport();
        final GsonFactory gsonFactory = GsonFactory.getDefaultInstance();
        GoogleIdTokenVerifier.Builder verifier =
                new GoogleIdTokenVerifier.Builder(transport, gsonFactory)
                        .setAudience(Collections.singletonList(googleClientId));
        final GoogleIdToken googleIdToken = GoogleIdToken.parse(verifier.getJsonFactory(), tokenDto.getValue());
        final GoogleIdToken.Payload payload = googleIdToken.getPayload();
        return new ResponseEntity<>(payload, HttpStatus.OK);
    }
}
