import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

    authentificationForm: FormGroup;
    estAuthentifie: boolean = true;

    constructor(private fb: FormBuilder, private router: Router) { }

    onAuthentification() {
        if (this.authentificationForm.value.identifiant == 'cons1' && this.authentificationForm.value.motDePasse == 'cons1u') {
            this.router.navigate(['/liste-clients/2']);
            this.estAuthentifie = true;
        } else if (this.authentificationForm.value.identifiant == 'admin' && this.authentificationForm.value.motDePasse == 'admin') {
            this.router.navigate(['/liste-conseillers/1']);
            this.estAuthentifie = true;
        } else if (this.authentificationForm.value.identifiant == 'cons2' && this.authentificationForm.value.motDePasse == 'cons2') {
            this.router.navigate(['/liste-clients/26']);
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
    }

}
