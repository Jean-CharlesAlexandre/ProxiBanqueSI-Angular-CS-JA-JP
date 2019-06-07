import { Component, OnInit, Input } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';

@Component({
    selector: 'app-creer-client',
    templateUrl: './creer-client.component.html',
    styleUrls: ['./creer-client.component.css'],
    providers: [ConseillerService]
})
export class CreerClientComponent implements OnInit {

    clientDetails: any = {};
    adresse: any = {};

    createClientForm = this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        adresse: this.fb.group({
            numero: ['', Validators.required],
            rue: ['', Validators.required],
            codePostal: ['', Validators.required],
            ville: ['', Validators.required]
        })
    });

    constructor(private conseillerService: ConseillerService, private fb: FormBuilder) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
    }

    onSubmit() {
        this.clientDetails.nom = this.createClientForm.value.nom;
        this.clientDetails.prenom = this.createClientForm.value.prenom;
        this.clientDetails.email = this.createClientForm.value.email;
        this.clientDetails.telephone = this.createClientForm.value.telephone;

        this.clientDetails.adresse.numero = this.createClientForm.value.numero;
        this.clientDetails.adresse.rue = this.createClientForm.value.rue;
        this.clientDetails.adresse.codePostal = this.createClientForm.value.codePostal;
        this.clientDetails.adresse.ville = this.createClientForm.value.ville;

        this.createClient();
    }

    createClient() {
        this.conseillerService.createClient(this.clientDetails).subscribe((data: {}) => console.log(data));
    }


    ngOnInit() {
    }

}
