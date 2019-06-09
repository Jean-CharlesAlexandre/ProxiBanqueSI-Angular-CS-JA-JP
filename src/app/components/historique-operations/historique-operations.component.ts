import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';

@Component({
    selector: 'app-historique-operations',
    templateUrl: './historique-operations.component.html',
    styleUrls: ['./historique-operations.component.css']
})
export class HistoriqueOperationsComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    idClient = this.activatedRoute.snapshot.params['idClient'];
    clientDetails: any = {};
    conseiller: any = [];

    constructor(private gerantService: GerantService, private service: ConseillerService,
        private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
        this.conseiller = new Conseiller();
    }

    ngOnInit() {
        this.conseiller = this.afficherConseiller(this.idCons);
    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

}
