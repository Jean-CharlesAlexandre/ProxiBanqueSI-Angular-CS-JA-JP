import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { CarteBancaire } from 'src/app/model/carte-bancaire';
import { CompteCourant } from 'src/app/model/compte-courant';
import { CompteEpargne } from 'src/app/model/compte-epargne';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';


@Component({
    selector: 'app-voir-client',
    templateUrl: './voir-client.component.html',
    styleUrls: ['./voir-client.component.css']
})
export class VoirClientComponent implements OnInit {

    idClient = this.activatedRoute.snapshot.params['idClient'];
    clientDetails: any = {};
    idCons = this.activatedRoute.snapshot.params['idCons'];
    conseiller: any = [];

    constructor(private service: ConseillerService, private serviceG: GerantService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
        this.clientDetails.compteCourant = new CompteCourant();
        this.clientDetails.compteEpargne = new CompteEpargne();
        this.clientDetails.compteCourant.carteBancaire = new CarteBancaire();
        this.conseiller = new Conseiller();
    }

    ngOnInit() {
        this.service.getClient(this.idClient).subscribe((data: {}) => this.clientDetails = data);
        this.conseiller = this.afficherConseiller(this.idCons);
    }

    gotoList() {
        this.router.navigate(['/liste-clients/' + this.idCons]);
        return false;
    }

    supprimerClient(id) {
        if (window.confirm('Voulez-vous vraiment supprimer ce client ?')) {
            this.service.deleteClient(id).subscribe(data => {
                this.router.navigate(['/liste-clients/' + this.idCons]);
            });
        }
    }

    afficherConseiller(id) {
        return this.serviceG.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

}
