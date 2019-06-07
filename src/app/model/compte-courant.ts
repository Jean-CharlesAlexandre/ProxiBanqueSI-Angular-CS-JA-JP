import { CarteBancaire } from './carte-bancaire';

export class CompteCourant {

    id: number;
    numCompte: number;
    dateOuverture: string;
    solde: number;
    carteBancaire: CarteBancaire;
    // autorisationDecouvert: number; // AJOUT CHLOE
}
