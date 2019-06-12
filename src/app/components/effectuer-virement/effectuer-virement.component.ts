import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { CompteCourant } from 'src/app/model/compte-courant';
import { CompteEpargne } from 'src/app/model/compte-epargne';
import { CarteBancaire } from 'src/app/model/carte-bancaire';

@Component({
    selector: 'app-effectuer-virement',
    templateUrl: './effectuer-virement.component.html',
    styleUrls: ['./effectuer-virement.component.css'],
    providers: [ConseillerService, GerantService]
})
export class EffectuerVirementComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    conseiller: any = [];
    virement: FormGroup;
    clientDebiteur: any = {}; //Client = null;
    clientCrediteur: any = {}; //Client = null;
    choisirClientDetC: FormGroup;
    choisirCompteDetC: FormGroup;
    valeurTrueFalse: boolean = false;
    valeurCompteD: string = 'init';
    valeurCompteC: string = 'init';
    messageVirement: string = 'init';


    // tslint:disable-next-line: max-line-length
    constructor(public gerantService: GerantService, public conseillerService: ConseillerService, public router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {

        this.conseiller = new Conseiller();

        this.clientDebiteur = new Client();
        this.clientDebiteur.adresse = new Adresse();
        this.clientDebiteur.compteCourant = new CompteCourant();
        this.clientDebiteur.compteEpargne = new CompteEpargne();
        this.clientDebiteur.compteCourant.carteBancaire = new CarteBancaire();

        this.clientCrediteur = new Client();
        this.clientCrediteur.adresse = new Adresse();
        this.clientCrediteur.compteCourant = new CompteCourant();
        this.clientCrediteur.compteEpargne = new CompteEpargne();
        this.clientCrediteur.compteCourant.carteBancaire = new CarteBancaire();

    }

    ngOnInit() {

        this.conseiller = this.afficherConseiller(this.idCons);

        this.virement = this.fb.group({
            montant: ['', Validators.required]
        });

        this.choisirClientDetC = this.fb.group({
            clientD: [''],
            clientC: ['']
        })

        this.choisirCompteDetC = this.fb.group({
            compteD: [''],
            compteC: [''],
            montant: ['']
        })

    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

    onSubmit() {
        this.valeurTrueFalse = true;
    }

    validerClientsDetC() {

        this.clientDebiteur = this.afficherClientD(this.choisirClientDetC.value.clientD.id);
        this.clientCrediteur = this.afficherClientC(this.choisirClientDetC.value.clientC.id);

        // this.clientDebiteur.id = this.choisirClientDetC.value.clientD.id;
        // this.clientCrediteur.id = this.choisirClientDetC.value.clientC.id;

        // tslint:disable-next-line: max-line-length
        // this.conseillerService.getClient(this.choisirClientDetC.value.clientD.id).subscribe(data => this.clientDebiteur = data,
        //     error => console.log('error in service'));

        // tslint:disable-next-line: max-line-length
        // this.conseillerService.getClient(this.choisirClientDetC.value.clientC.id).subscribe(data => this.clientCrediteur = data,
        //     error => console.log('error in service'));

        // this.clientDebiteur.id = this.choisirClientDetC.value.clientD.id;
        // this.clientCrediteur.id = this.choisirClientDetC.value.clientC.id

        // this.clientDebiteur.nom = this.choisirClientDetC.value.clientD.nom;
        // this.clientCrediteur.raisonSociale = this.choisirClientDetC.value.clientC.raisonSociale;

        // this.clientDebiteur.compteCourant.solde = this.choisirClientDetC.value.clientD.compteCourant.solde;
        // this.clientCrediteur.compteCourant.solde = this.choisirClientDetC.value.clientC.compteCourant.solde;

        // this.clientDebiteur.compteEpargne.solde = this.choisirClientDetC.value.clientD.compteEpargne.solde;
        // this.clientCrediteur.compteEpargne.solde = this.choisirClientDetC.value.clientC.compteEpargne.solde;

        console.log(this.clientDebiteur.id);
        console.log(this.clientCrediteur.id);

        console.log(this.clientDebiteur.nom);
        console.log(this.clientCrediteur.raisonSociale);

    }

    afficherClientD(id) {
        this.valeurTrueFalse = true;
        return this.conseillerService.getClient(id).subscribe(data => this.clientDebiteur = data,
            error => console.log('error in service'));
    }

    afficherClientC(id) {
        this.valeurTrueFalse = true;
        return this.conseillerService.getClient(id).subscribe(data => this.clientCrediteur = data,
            error => console.log('error in service'));
    }

    validerComptesDetC() {

        console.log(this.choisirCompteDetC.value.montant);
        console.log(this.choisirCompteDetC.value.compteD.solde);
        console.log(this.choisirCompteDetC.value.compteD);
        console.log("coucou")

        if (this.choisirCompteDetC.value.montant > 0 && this.choisirCompteDetC.value.montant < this.choisirCompteDetC.value.compteD.solde) {

            if (this.choisirCompteDetC.value.compteD.id != this.choisirCompteDetC.value.compteC.id) {

                this.messageVirement = 'ok';

                if (!(this.choisirCompteDetC.value.compteD.tauxRemuneration) && !(this.choisirCompteDetC.value.compteC.tauxRemuneration)) {
                    // tslint:disable-next-line: max-line-length
                    this.clientDebiteur.compteCourant.solde = this.clientDebiteur.compteCourant.solde - this.choisirCompteDetC.value.montant;
                    // tslint:disable-next-line: max-line-length
                    this.clientCrediteur.compteCourant.solde = this.clientCrediteur.compteCourant.solde - (- this.choisirCompteDetC.value.montant);
                    // tslint:disable-next-line: max-line-length
                } else if ((this.choisirCompteDetC.value.compteD.tauxRemuneration) && !(this.choisirCompteDetC.value.compteC.tauxRemuneration)) {
                    // tslint:disable-next-line: max-line-length
                    this.clientDebiteur.compteEpargne.solde = this.clientDebiteur.compteEpargne.solde - this.choisirCompteDetC.value.montant;
                    // tslint:disable-next-line: max-line-length
                    this.clientCrediteur.compteCourant.solde = this.clientCrediteur.compteCourant.solde - (- this.choisirCompteDetC.value.montant);
                    // tslint:disable-next-line: max-line-length
                } else if (!(this.choisirCompteDetC.value.compteD.tauxRemuneration) && (this.choisirCompteDetC.value.compteC.tauxRemuneration)) {
                    // tslint:disable-next-line: max-line-length
                    this.clientDebiteur.compteCourant.solde = this.clientDebiteur.compteCourant.solde - this.choisirCompteDetC.value.montant;
                    // tslint:disable-next-line: max-line-length
                    this.clientCrediteur.compteEpargne.solde = this.clientCrediteur.compteEpargne.solde - (- this.choisirCompteDetC.value.montant);
                    // tslint:disable-next-line: max-line-length
                } else if ((this.choisirCompteDetC.value.compteD.tauxRemuneration) && (this.choisirCompteDetC.value.compteC.tauxRemuneration)) {
                    // tslint:disable-next-line: max-line-length
                    this.clientDebiteur.compteEpargne.solde = this.clientDebiteur.compteEpargne.solde - this.choisirCompteDetC.value.montant;
                    // tslint:disable-next-line: max-line-length
                    this.clientCrediteur.compteEpargne.solde = this.clientCrediteur.compteEpargne.solde - (- this.choisirCompteDetC.value.montant);
                }


            } else {
                this.messageVirement = 'memeComptesDetC';
            }

        } else {
            if (this.choisirCompteDetC.value.montant < 0) {
                this.messageVirement = 'montantNegatif';
            } else if (this.choisirCompteDetC.value.montant > this.choisirCompteDetC.value.compteD.solde) {
                this.messageVirement = 'montantSupSolde';
            }

        }


        this.conseillerService.updateClient(this.clientDebiteur).subscribe((data: {}) => console.log(data))
        this.conseillerService.updateClient(this.clientCrediteur).subscribe((data: {}) => console.log(data))


    }

}
