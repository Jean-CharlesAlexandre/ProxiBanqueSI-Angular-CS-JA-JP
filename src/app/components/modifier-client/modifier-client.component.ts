import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseillerService } from '../../services/conseiller.service';
import { Client } from '../../model/client';
import { Adresse } from '../../model/adresse';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';

@Component({
    selector: 'app-modifier-client',
    templateUrl: './modifier-client.component.html',
    styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    idClient = this.activatedRoute.snapshot.params['idClient'];
    clientDetails: any = {};
    conseiller: any = [];

    constructor(public gerantService: GerantService, private service: ConseillerService,
        private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
        this.conseiller = new Conseiller();
    }

    ngOnInit() {
        this.service.getClient(this.idClient).subscribe((data: {}) => {
            this.clientDetails = data;
        });
        this.conseiller = this.afficherConseiller(this.idCons);
    }

    modifierClient() {
        if (window.confirm('Voulez-vous vraiment appliquer ces modifications ?')) {
            this.service.updateClient(this.clientDetails).subscribe(data => {
                this.router.navigate(['/liste-clients/' + this.idCons]);
            });
        }
    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

}
