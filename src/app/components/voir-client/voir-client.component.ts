import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { CarteBancaire } from 'src/app/model/carte-bancaire';
import { CompteCourant } from 'src/app/model/compte-courant';
import { CompteEpargne } from 'src/app/model/compte-epargne';


@Component({
    selector: 'app-voir-client',
    templateUrl: './voir-client.component.html',
    styleUrls: ['./voir-client.component.css']
})
export class VoirClientComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};

    constructor(private service: ConseillerService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
        this.clientDetails.compteCourant = new CompteCourant();
        this.clientDetails.compteEpargne = new CompteEpargne();
        this.clientDetails.compteCourant.carte = new CarteBancaire();
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => this.clientDetails = data);
    }

    gotoList() {
        this.router.navigate(['/liste-clients']);
        return false;
    }

}
