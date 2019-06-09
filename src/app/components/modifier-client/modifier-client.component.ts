import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseillerService } from '../../services/conseiller.service';
import { Client } from '../../model/client';
import { Adresse } from '../../model/adresse';

@Component({
    selector: 'app-modifier-client',
    templateUrl: './modifier-client.component.html',
    styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    idClient = this.activatedRoute.snapshot.params['idClient'];
    clientDetails: any = {};

    constructor(private service: ConseillerService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
    }

    ngOnInit() {
        this.service.getClient(this.idClient).subscribe((data: {}) => {
            this.clientDetails = data;
        });
    }

    modifierClient() {
        if (window.confirm('Voulez-vous vraiment appliquer ces modifications ?')) {
            this.service.updateClient(this.clientDetails).subscribe(data => {
                this.router.navigate(['/liste-clients/' + this.idCons]);
            });
        }
    }

}
