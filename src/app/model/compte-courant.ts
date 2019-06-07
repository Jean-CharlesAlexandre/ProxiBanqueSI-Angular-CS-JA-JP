import { CarteBancaire } from './carte-bancaire';

export class CompteCourant {

    id: number;
    numCompte: number;
    dateOuverture: string;
    solde: number;
    autorisationDecouvert: number;
    carte: CarteBancaire;
}
