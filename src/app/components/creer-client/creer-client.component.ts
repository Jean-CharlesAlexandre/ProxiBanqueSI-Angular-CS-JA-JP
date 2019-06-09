import { Component, OnInit, Input } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteCourant } from 'src/app/model/compte-courant';
import { CompteEpargne } from 'src/app/model/compte-epargne';
import { CarteBancaire } from 'src/app/model/carte-bancaire';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';

@Component({
    selector: 'app-creer-client',
    templateUrl: './creer-client.component.html',
    styleUrls: ['./creer-client.component.css'],
    providers: [ConseillerService]
})
export class CreerClientComponent implements OnInit {

    estParticulier: boolean;
    clientDetails: any = {};
    createParticulierForm: FormGroup;
    createEntrepriseForm: FormGroup;
    idCons = this.activatedRoute.snapshot.params['idCons'];
    // type = this.activatedRoute.snapshot.params['type'];
    conseiller: any = [];

    constructor(private conseillerService: ConseillerService, private fb: FormBuilder,
        private router: Router, private activatedRoute: ActivatedRoute, private gerantService: GerantService) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
    }

    onCreateParticulier() {
        let genereNumCompteCourantParticulier = (Math.random()+1)*100000000;
        let genereNumCompteEpargneParticulier = (Math.random()+1)*100000000;

        this.clientDetails.nom = this.createParticulierForm.value.nomParticulier;
        this.clientDetails.prenom = this.createParticulierForm.value.prenomParticulier;
        this.clientDetails.email = this.createParticulierForm.value.emailParticulier;
        this.clientDetails.telephone = this.createParticulierForm.value.telephoneParticulier;

        this.clientDetails.adresse.numero = this.createParticulierForm.value.adresseParticulier.numeroParticulier;
        this.clientDetails.adresse.rue = this.createParticulierForm.value.adresseParticulier.rueParticulier;
        this.clientDetails.adresse.codePostal = this.createParticulierForm.value.adresseParticulier.codePostalParticulier;
        this.clientDetails.adresse.ville = this.createParticulierForm.value.adresseParticulier.villeParticulier;

        if (this.createParticulierForm.value.compteCourantParticulier) {
            this.clientDetails.compteCourant = new CompteCourant();
            this.clientDetails.compteCourant.solde = this.createParticulierForm.value.soldeCompteCourantParticulier;
            this.clientDetails.compteCourant.numCompte = genereNumCompteCourantParticulier;
            this.clientDetails.compteCourant.dateOuverture = '20/08/2015';
            if (this.createParticulierForm.value.carteBancaireParticulier == 'Premier') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Premier';
            } else if (this.createParticulierForm.value.carteBancaireParticulier == 'Electron') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Electron';
            }
        }

        if (this.createParticulierForm.value.compteEpargneParticulier) {
            this.clientDetails.compteEpargne = new CompteEpargne();
            this.clientDetails.compteEpargne.solde = this.createParticulierForm.value.soldeCompteEpargneParticulier;
            this.clientDetails.compteEpargne.numCompte = genereNumCompteEpargneParticulier;
            this.clientDetails.compteEpargne.dateOuverture = '20/08/2015';
        }
        this.createClient();
    }

    onCreateEntreprise() {
        let genereNumCompteCourantEntreprise = (Math.random()+1)*100000000;
        let genereNumCompteEpargneEntreprise = (Math.random()+1)*100000000;

        this.clientDetails.raisonSociale = this.createEntrepriseForm.value.raisonSocialeEntreprise;
        this.clientDetails.email = this.createEntrepriseForm.value.emailEntreprise;
        this.clientDetails.telephone = this.createEntrepriseForm.value.telephoneEntreprise;

        this.clientDetails.adresse.numero = this.createEntrepriseForm.value.adresseEntreprise.numeroEntreprise;
        this.clientDetails.adresse.rue = this.createEntrepriseForm.value.adresseEntreprise.rueEntreprise;
        this.clientDetails.adresse.codePostal = this.createEntrepriseForm.value.adresseEntreprise.codePostalEntreprise;
        this.clientDetails.adresse.ville = this.createEntrepriseForm.value.adresseEntreprise.villeEntreprise;

        if (this.createEntrepriseForm.value.compteCourantEntreprise) {
            this.clientDetails.compteCourant = new CompteCourant();
            this.clientDetails.compteCourant.solde = this.createEntrepriseForm.value.soldeCompteCourantEntreprise;
            this.clientDetails.compteCourant.numCompte = genereNumCompteCourantEntreprise;
            this.clientDetails.compteCourant.dateOuverture = '20/08/2015';
            if (this.createEntrepriseForm.value.carteBancaireEntreprise == 'Premier') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Premier';
            } else if (this.createEntrepriseForm.value.carteBancaireEntreprise == 'Electron') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Electron';
            }
        }

        if (this.createEntrepriseForm.value.compteEpargneEntreprise) {
            this.clientDetails.compteEpargne = new CompteEpargne();
            this.clientDetails.compteEpargne.solde = this.createEntrepriseForm.value.soldeCompteEpargneEntreprise;
            this.clientDetails.compteEpargne.numCompte = genereNumCompteEpargneEntreprise;
            this.clientDetails.compteEpargne.dateOuverture = '20/08/2015';
        }
        this.createClient();
    }

    createClient() {
        this.conseillerService.createClient(this.idCons, this.clientDetails).subscribe((data: {}) =>
            this.router.navigate(['/liste-clients/' + this.idCons]));
    }

    onParticulier() {
        this.estParticulier = true;
    }

    onEntreprise() {
        this.estParticulier = false;
    }

    ngOnInit() {
        this.createParticulierForm = this.fb.group({
            nomParticulier: ['', Validators.required],
            prenomParticulier: ['', Validators.required],
            emailParticulier: ['', Validators.required],
            telephoneParticulier: ['', Validators.required],
            adresseParticulier: this.fb.group({
                numeroParticulier: ['', Validators.required],
                rueParticulier: ['', Validators.required],
                codePostalParticulier: ['', Validators.required],
                villeParticulier: ['', Validators.required]
            }),
            compteCourantParticulier: [''],
            soldeCompteCourantParticulier: [''],
            compteEpargneParticulier: [''],
            soldeCompteEpargneParticulier: [''],
            carteBancaireParticulier: [''],
            typeCarteBancaireParticulier: ['']
        });

        this.createEntrepriseForm = this.fb.group({
            raisonSocialeEntreprise: ['', Validators.required],
            emailEntreprise: ['', Validators.required],
            telephoneEntreprise: ['', Validators.required],
            adresseEntreprise: this.fb.group({
                numeroEntreprise: ['', Validators.required],
                rueEntreprise: ['', Validators.required],
                codePostalEntreprise: ['', Validators.required],
                villeEntreprise: ['', Validators.required]
            }),
            compteCourantEntreprise: [''],
            soldeCompteCourantEntreprise: [''],
            compteEpargneEntreprise: [''],
            soldeCompteEpargneEntreprise: [''],
            carteBancaireEntreprise: [''],
            typeCarteBancaireEntreprise: ['']
        });
        this.conseiller = this.afficherConseiller(this.idCons);
        this.estParticulier = true;
    }

    afficherConseiller(idCons) {
        return this.gerantService.getConseiller(idCons).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

}
