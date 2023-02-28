import { ListaAnnunci, ListaAnnunciMateriaPrima } from "./listaAnnunci";

export class User {
    id?: number;
    username?: string;
    nome?: string;
    cognome?:string;
    email?:string;
    password?:string;
    isVenditoreFornitore?:number;
    telefono?:string;
    annunciGioelli?: ListaAnnunci[];
    annunciMateriaPrima?: ListaAnnunciMateriaPrima[];
}