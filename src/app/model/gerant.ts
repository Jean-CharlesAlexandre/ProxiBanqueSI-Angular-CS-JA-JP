import { Adresse } from './adresse';
import { Conseiller } from './conseiller';

export class Gerant {

    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    identifiant: string;
    motDePasse: string;
    adresse: Adresse;
    listeConseillers: Conseiller[] = [];

}
