import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Adresse } from 'src/app/model/adresse';

@Component({
    selector: 'app-historique-operations',
    templateUrl: './historique-operations.component.html',
    styleUrls: ['./historique-operations.component.css']
})
export class HistoriqueOperationsComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};

    constructor(private service: ConseillerService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Client();
        this.clientDetails.adresse = new Adresse();
    }

    ngOnInit() {
    }

}
