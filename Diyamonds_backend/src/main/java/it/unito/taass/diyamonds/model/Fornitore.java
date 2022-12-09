package it.unito.taass.diyamonds.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "Fornitore")
public class Fornitore extends User {

    private ArrayList<AnnuncioMateriaPrima> annunciMateriaPrima;

    public Fornitore() {
    }

    public Fornitore(long id, String username, String nome, String cognome, String email, String password, int isVenditoreFornitore, String telefono, ArrayList<AnnuncioMateriaPrima> annunciMateriaPrima) {
        super(id, username, nome, cognome, email, password, isVenditoreFornitore, telefono);
        this.annunciMateriaPrima = annunciMateriaPrima;
    }

    public ArrayList<AnnuncioMateriaPrima> getAnnunciMateriaPrima() {
        return annunciMateriaPrima;
    }

    public void setAnnunciMateriaPrima(ArrayList<AnnuncioMateriaPrima> annunciMateriaPrima) {
        this.annunciMateriaPrima = annunciMateriaPrima;
    }

    @Override
    public String toString() {
        return "Fornitore{" + super.toString() +
                "annunciMateriaPrima=" + annunciMateriaPrima +
                '}';
    }
}
