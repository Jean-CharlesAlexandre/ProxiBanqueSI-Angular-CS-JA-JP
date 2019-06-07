import { CompteCourant } from './compte-courant';
import { CompteEpargne } from './compte-epargne';

export class Operation {

    id: number;
    dateOperation: string;
    compteCourant: CompteCourant;
    compteEpargne: CompteEpargne;
    montant: number;
    typeDebitOuCredit: string;
}
