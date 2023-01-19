package it.unito.taass.diyamonds2.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "AnnuncioGioiello")
public class AnnuncioGioiello implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "idVenditore", nullable = false)
    private long idVenditore;
    @Column(name = "descrizione", nullable = false)
    private String descrizione;
    @Column(name = "gioiello", nullable = false)
    private String gioiello;
    @Column(name = "prezzo", nullable = false)
    private int prezzo;

    public AnnuncioGioiello() {
    }

    public AnnuncioGioiello(String descrizione, String gioiello, int prezzo) {
        this.descrizione = descrizione;
        this.gioiello = gioiello;
        this.prezzo = prezzo;
    }

    public AnnuncioGioiello(long idVenditore, String descrizione, String gioiello, int prezzo) {
        this.idVenditore = idVenditore;
        this.descrizione = descrizione;
        this.gioiello = gioiello;
        this.prezzo = prezzo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdVenditore() {
        return idVenditore;
    }

    public void setIdVenditore(long idVenditore) {
        this.idVenditore = idVenditore;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getGioiello() {
        return gioiello;
    }

    public void setGioiello(String gioiello) {
        this.gioiello = gioiello;
    }

    public int getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(int prezzo) {
        this.prezzo = prezzo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AnnuncioGioiello that = (AnnuncioGioiello) o;
        return id == that.id && idVenditore == that.idVenditore && prezzo == that.prezzo && Objects.equals(descrizione, that.descrizione) && Objects.equals(gioiello, that.gioiello);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idVenditore, descrizione, gioiello, prezzo);
    }

    @Override
    public String toString() {
        return "AnnuncioGioiello{" +
                "id=" + id +
                ", idVenditore=" + idVenditore +
                ", descrizione='" + descrizione + '\'' +
                ", gioiello=" + gioiello +
                ", prezzo=" + prezzo +
                '}';
    }
}
