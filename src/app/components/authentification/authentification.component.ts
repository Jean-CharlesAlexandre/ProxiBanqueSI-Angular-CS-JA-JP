import { Component, OnInit } from '@angular/core';
import { GerantService } from 'src/app/services/gerant.service';
import { Gerant } from 'src/app/model/gerant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Conseiller } from 'src/app/model/conseiller';

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

    authentificationForm: FormGroup;
    estAuthentifie: boolean = true;
    idCons1: any = {}; 
    idCons2: any = {};
    idGerant: any = {};
    gerant: any = [];
    conseiller: any = [];

    constructor(public service: GerantService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
        this.gerant = new Gerant();
        this.conseiller = new Conseiller();
    }

    onAuthentification() {

        if (this.authentificationForm.value.identifiant === 'cons1' && this.authentificationForm.value.motDePasse === 'cons1') {
            this.router.navigate(['/liste-clients/', this.idCons1]);
            this.estAuthentifie = true;
        } else if (this.authentificationForm.value.identifiant === 'cons2' &&
            this.authentificationForm.value.motDePasse === 'cons2') {
            this.router.navigate(['/liste-clients/', this.idCons2]);
            this.estAuthentifie = true;
        } else if (this.authentificationForm.value.identifiant === 'admin' &&
            this.authentificationForm.value.motDePasse === 'admin') {
            this.router.navigate(['/liste-conseillers/', this.idGerant]);
            this.estAuthentifie = true;
        } else {
            this.estAuthentifie = false;
        }
    }

    ngOnInit() {
        this.authentificationForm = this.fb.group({
            identifiant: ['', Validators.required],
            motDePasse: ['', Validators.required],
        });
        this.idGerant = 1;
        this.idCons1 = 2;
        this.idCons2 = 26;
    }

}
