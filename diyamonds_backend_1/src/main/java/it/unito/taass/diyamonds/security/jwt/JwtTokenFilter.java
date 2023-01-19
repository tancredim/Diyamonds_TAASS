/*package it.unito.taass.diyamonds.security.jwt;

import it.unito.taass.diyamonds.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String token = getToken(request);
            String email = jwtProvider.getEmailFromToken(token);
            UserDetails userDetails = null;
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                    new UsernamePasswordAuthenticationToken(email, null, userDetails.getAuthorities());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getToken(HttpServletRequest request) {
        String authReq = request.getHeader("Authorization");
        if (authReq != null && authReq.startsWith("Bearer ")) {
            return authReq.replace("Bearer ", "");
        }

        return null;

    }
}*/
