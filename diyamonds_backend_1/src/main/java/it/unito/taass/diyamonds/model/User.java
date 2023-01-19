package it.unito.taass.diyamonds.model;

import javax.persistence.*;

@Entity
@Table(name = "Utente")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "nome", nullable = false)
    private String nome;
    @Column(name = "cognome", nullable = false)
    private String cognome;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "venditoreFornitore", nullable = false)
    private int isVenditoreFornitore;
    @Column(name = "telefono", nullable = false)
    private String telefono;

    public User() {
    }

    public User(String username, String nome, String cognome, String email, String password, int isVenditoreFornitore, String telefono) {
        this.username = username;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.isVenditoreFornitore = isVenditoreFornitore;
        this.telefono = telefono;
    }

    public User(long id) {
        this.id = id;
    }

    public User(long id, String username, String nome, String cognome, String email, String password, int isVenditoreFornitore, String telefono) {
        this.id = id;
        this.username = username;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.isVenditoreFornitore = isVenditoreFornitore;
        this.telefono = telefono;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIsVenditoreFornitore() {
        return isVenditoreFornitore;
    }

    public void setIsVenditoreFornitore(int isVenditoreFornitore) {
        this.isVenditoreFornitore = isVenditoreFornitore;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "ListaAnnunci{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", nome='" + nome + '\'' +
                ", cognome='" + cognome + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", isVenditoreFornitore=" + isVenditoreFornitore +
                ", telefono='" + telefono + '\'' +
                '}';
    }
}