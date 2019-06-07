import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Conseiller } from 'src/app/model/conseiller';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-clients',
    templateUrl: './liste-clients.component.html',
    styleUrls: ['./liste-clients.component.css'],
    providers: [ConseillerService]
})
export class ListeClientsComponent implements OnInit {

    clients: any = [];
    conseiller: Conseiller;

    constructor(
        public service: ConseillerService, public router: Router
    ) { }

    ngOnInit() {
        this.afficherClients();
        this.afficherConseiller();
    }

    afficherClients() {
        return this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));
    }

    afficherConseiller() {
        return this.service.getConseiller().subscribe(data => this.conseiller = data, error => console.log('error in service'));
    }
}
