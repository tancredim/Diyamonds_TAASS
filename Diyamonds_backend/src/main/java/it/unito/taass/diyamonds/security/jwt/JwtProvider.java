package it.unito.taass.diyamonds.security.jwt;

import com.google.api.client.util.Value;
import io.jsonwebtoken.*;
import it.unito.taass.diyamonds.model.User;
import org.springframework.security.core.Authentication;

import java.util.Date;

public class JwtProvider {

    @Value("@{jwt.secret}")
    String secret;

    @Value("@{jwt.expiration}")
    int expiration;

    public String generateToken(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return Jwts.builder().setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String getEmailFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJwt(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJwt(token);
            return true;
        } catch (MalformedJwtException | UnsupportedJwtException | ExpiredJwtException | IllegalArgumentException | SignatureException e) {
            e.printStackTrace();
        }
        return false;
    }
}
