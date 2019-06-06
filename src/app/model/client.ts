import { Adresse } from './adresse';
import { CompteCourant } from './compte-courant';
import { CompteEpargne } from './compte-epargne';

export class Client {

    id: number;
    raisonSociale: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: Adresse;
    compteCourant: CompteCourant;
    compteEpargne: CompteEpargne;
}
