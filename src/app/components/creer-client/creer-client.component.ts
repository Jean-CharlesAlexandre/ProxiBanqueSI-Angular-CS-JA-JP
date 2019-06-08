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

    estParticulier: boolean = true;
    clientDetails: any = {};
    createClientForm: FormGroup;
    idCons = this.activatedRoute.snapshot.params['idCons'];
    type = this.activatedRoute.snapshot.params['type'];
    conseiller: any = [];

    constructor(private conseillerService: ConseillerService, private fb: FormBuilder,
        private router: Router, private activatedRoute: ActivatedRoute, private gerantService: GerantService) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
    }

    onSubmit() {
        let genereNumCompteCourant = (Math.random()+1)*100000000;
        let genereNumCompteEpargne = (Math.random()+1)*100000000;

        this.clientDetails.nom = this.createClientForm.value.nom;
        this.clientDetails.prenom = this.createClientForm.value.prenom;
        this.clientDetails.email = this.createClientForm.value.email;
        this.clientDetails.telephone = this.createClientForm.value.telephone;

        this.clientDetails.adresse.numero = this.createClientForm.value.adresse.numero;
        this.clientDetails.adresse.rue = this.createClientForm.value.adresse.rue;
        this.clientDetails.adresse.codePostal = this.createClientForm.value.adresse.codePostal;
        this.clientDetails.adresse.ville = this.createClientForm.value.adresse.ville;

        if (this.createClientForm.value.compteCourant) {
            this.clientDetails.compteCourant = new CompteCourant();
            this.clientDetails.compteCourant.solde = this.createClientForm.value.soldeCompteCourant;
            this.clientDetails.compteCourant.numCompte = genereNumCompteCourant;
            this.clientDetails.compteCourant.clientAssocie = this.clientDetails;
            this.clientDetails.compteCourant.dateOuverture = '20/08/2015';
            if (this.createClientForm.value.carteBancaire == 'Premier') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Premier';
            } else if (this.createClientForm.value.carteBancaire == 'Electron') {
                this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
                this.clientDetails.compteCourant.carteBancaire.typePremierOuElectron = 'Electron';
            }
        }

        if (this.createClientForm.value.compteEpargne) {
            this.clientDetails.compteEpargne = new CompteEpargne();
            this.clientDetails.compteEpargne.solde = this.createClientForm.value.soldeCompteEpargne;
            this.clientDetails.compteEpargne.numCompte = genereNumCompteEpargne;
            this.clientDetails.compteEpargne.dateOuverture = '20/08/2015';
            this.clientDetails.compteCourant.clientAssocie = this.clientDetails;
        }



        this.createClient();
    }

    createClient() {
        this.conseillerService.createClient(this.clientDetails).subscribe((data: {}) =>
            this.router.navigate(['/liste-clients' + this.idCons]));
    }

    onParticulier() {
        this.estParticulier = true;
    }

    onEntreprise() {
        this.estParticulier = false;
    }

    ngOnInit() {
        this.createClientForm = this.fb.group({
            raisonSociale: ['', Validators.required],
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', Validators.required],
            telephone: ['', Validators.required],
            adresse: this.fb.group({
                numero: ['', Validators.required],
                rue: ['', Validators.required],
                codePostal: ['', Validators.required],
                ville: ['', Validators.required]
            }),
            compteCourant: [''],
            soldeCompteCourant: [''],
            compteEpargne: [''],
            soldeCompteEpargne: [''],
            carteBancaire: [''],
            typeCarteBancaire: ['']
        });
        this.conseiller = this.afficherConseiller(this.idCons);
    }

    afficherConseiller(idCons) {
        return this.gerantService.getConseiller(idCons).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

}
