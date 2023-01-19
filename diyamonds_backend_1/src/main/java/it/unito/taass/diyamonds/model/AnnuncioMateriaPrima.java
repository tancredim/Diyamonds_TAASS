package it.unito.taass.diyamonds.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "AnnuncioMateriaPrima")
public class AnnuncioMateriaPrima implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "idVenditore", nullable = false)
    private long idFornitore;
    @Column(name = "descrizione", nullable = false)
    private String descrizione;
    @Column(name = "materiaPrima", nullable = false)
    private String materiaPrima;
    @Column(name = "quantita", nullable = false)
    private int quantita;
    @Column(name = "prezzo", nullable = false)
    private int prezzo;

    public AnnuncioMateriaPrima() {
    }

    public AnnuncioMateriaPrima(long id, long idFornitore, String descrizione, String materiaPrima, int quantita, int prezzo) {
        this.id = id;
        this.idFornitore = idFornitore;
        this.descrizione = descrizione;
        this.materiaPrima = materiaPrima;
        this.quantita = quantita;
        this.prezzo = prezzo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdFornitore() {
        return idFornitore;
    }

    public void setIdFornitore(long idFornitore) {
        this.idFornitore = idFornitore;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getMateriaPrima() {
        return materiaPrima;
    }

    public void setMateriaPrima(String materiaPrima) {
        this.materiaPrima = materiaPrima;
    }

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
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
        AnnuncioMateriaPrima that = (AnnuncioMateriaPrima) o;
        return id == that.id && idFornitore == that.idFornitore && quantita == that.quantita && prezzo == that.prezzo && Objects.equals(descrizione, that.descrizione) && Objects.equals(materiaPrima, that.materiaPrima);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, idFornitore, descrizione, materiaPrima, quantita, prezzo);
    }

    @Override
    public String toString() {
        return "AnnuncioMateriaPrima{" +
                "id=" + id +
                ", idFornitore=" + idFornitore +
                ", descrizione='" + descrizione + '\'' +
                ", materiaPrima=" + materiaPrima +
                ", quantita=" + quantita +
                ", prezzo=" + prezzo +
                '}';
    }
}
