import { Component, OnInit, Input } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteCourant } from 'src/app/model/compte-courant';
import { CompteEpargne } from 'src/app/model/compte-epargne';
import { CarteBancaire } from 'src/app/model/carte-bancaire';

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

    constructor(private conseillerService: ConseillerService, private fb: FormBuilder, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
        this.clientDetails.compteCourant = new CompteCourant();
        this.clientDetails.compteEpargne = new CompteEpargne();
        this.clientDetails.carteBancaire = new CarteBancaire();
    }

    onSubmit() {
        this.clientDetails.nom = this.createClientForm.value.nom;
        this.clientDetails.prenom = this.createClientForm.value.prenom;
        this.clientDetails.email = this.createClientForm.value.email;
        this.clientDetails.telephone = this.createClientForm.value.telephone;

        this.clientDetails.adresse.numero = this.createClientForm.value.adresse.numero;
        this.clientDetails.adresse.rue = this.createClientForm.value.adresse.rue;
        this.clientDetails.adresse.codePostal = this.createClientForm.value.adresse.codePostal;
        this.clientDetails.adresse.ville = this.createClientForm.value.adresse.ville;

        this.createClient();
    }

    createClient() {
        this.conseillerService.createClient(this.clientDetails).subscribe((data: {}) => this.router.navigate(['/liste-clients']));
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
            compteCourant: ['', Validators.required],
            soldeCompteCourant: ['', Validators.required],
            compteEpargne: ['', Validators.required],
            soldeCompteEpargne: ['', Validators.required],
            carteBancaire: ['', Validators.required],
            typeCarteBancaire: ['', Validators.required]
        });
    }

}
