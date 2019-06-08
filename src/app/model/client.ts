import { Adresse } from './adresse';
import { CompteCourant } from './compte-courant';
import { CompteEpargne } from './compte-epargne';
import { Conseiller } from './conseiller';

export class Client {

    id: number;

    email: string;
    adresse: Adresse;
    compteCourant: CompteCourant;
    compteEpargne: CompteEpargne;
    nom: string;
    prenom: string;
    raisonSociale: string;
    telephone: string;
    // conseiller: Conseiller; //AJOUT CHLOE

}
