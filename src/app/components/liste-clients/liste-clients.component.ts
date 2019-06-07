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
    conseiller: any = [];

    constructor(
        public service: ConseillerService, public router: Router
    ) {
        this.conseiller = new Conseiller();
    }

    // Ici changer le "4" par la valeur de l'id du conseiller qui s'est identifié
    ngOnInit() {
        this.afficherClients();
        this.afficherConseiller(this.conseiller.id = 4);

    }

    afficherClients() {
        return this.service.getClients().subscribe(data => this.clients = data, error => console.log('error in service'));
    }

    afficherConseiller(id) {
        return this.service.getConseiller(id).subscribe(data => this.conseiller = data, error => console.log('error in service'));

    }
}
