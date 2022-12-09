package it.unito.taass.diyamonds.model;

import java.util.Objects;

public class MateriaPrima {

    private String nome;
    private String materiale;

    public MateriaPrima() {
    }

    public MateriaPrima(String nome, String materiale) {
        this.nome = nome;
        this.materiale = materiale;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMateriale() {
        return materiale;
    }

    public void setMateriale(String materiale) {
        this.materiale = materiale;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MateriaPrima that = (MateriaPrima) o;
        return Objects.equals(nome, that.nome) && Objects.equals(materiale, that.materiale);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, materiale);
    }

    @Override
    public String toString() {
        return "MateriaPrima{" +
                "nome='" + nome + '\'' +
                ", materiale='" + materiale + '\'' +
                '}';
    }
}
