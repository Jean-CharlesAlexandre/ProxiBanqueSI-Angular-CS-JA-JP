import { Adresse } from './adresse';
import { Client } from './client';

export class Conseiller {

    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    identifiant: string;
    motDePasse: string;
    adresse: Adresse;
    listeClients: Client[] = [];
}
