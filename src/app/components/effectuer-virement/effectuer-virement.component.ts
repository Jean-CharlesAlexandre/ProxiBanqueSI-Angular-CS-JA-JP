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

    // clientSelected: FormGroup;

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

        // this.clientCrediteur = new Client();
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

        // this.clientSelected = this.fb.group({});
    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

    onSubmit() {
        // this.clientDetails.nom = this.createClientForm.value.nom;  // montant
        // this.virement = this.fb.group({
        //     montant: ['', Validators.required]});
        this.valeurTrueFalse = true;
        console.log(this.conseiller);
    }

    // clickClientD(idDebiteur) {
    //     this.clientDebiteur.id = idDebiteur;
    // }

    // clickClientC(idCrediteur) {
    //     this.clientCrediteur.id = idCrediteur;
    // }

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

        // attention faire un if pour les comptes epargnes

        // tslint:disable-next-line: max-line-length
        // if ((this.choisirCompteDetC.value.compteD.id == "clientDC") && (this.choisirCompteDetC.value.compteC.id == "clientCC")) {
            this.clientDebiteur.compteCourant.solde = this.clientDebiteur.compteCourant.solde - this.choisirCompteDetC.value.montant;
            this.clientCrediteur.compteCourant.solde = this.clientCrediteur.compteCourant.solde - (- this.choisirCompteDetC.value.montant);
        // }


        this.conseillerService.updateClient(this.clientDebiteur).subscribe((data: {}) => console.log(data))
        this.conseillerService.updateClient(this.clientCrediteur).subscribe((data: {}) => console.log(data))

        // this.clientCrediteur = this.afficherClientC(this.choisirClientDetC.value.clientC.id);

    }

}
