package it.unito.taass.diyamonds.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "Venditore")
public class Venditore extends User {

    private ArrayList<AnnuncioGioiello> annunciGioelli;

    public Venditore() {
    }

    public Venditore(long id, String username, String nome, String cognome, String email, String password, int isVenditoreFornitore, String telefono, ArrayList<AnnuncioGioiello> annunciGioelli) {
        super(id, username, nome, cognome, email, password, isVenditoreFornitore, telefono);
        this.annunciGioelli = annunciGioelli;
    }

    public ArrayList<AnnuncioGioiello> getAnnunciGioelli() {
        return annunciGioelli;
    }

    public void setAnnunciGioelli(ArrayList<AnnuncioGioiello> annunciGioelli) {
        this.annunciGioelli = annunciGioelli;
    }

    @Override
    public String toString() {
        return "Venditore{" + super.toString() +
                "annunciGioelli=" + annunciGioelli +
                '}';
    }
}
