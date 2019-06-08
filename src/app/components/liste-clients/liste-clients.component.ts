import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Conseiller } from 'src/app/model/conseiller';
import { Router, ActivatedRoute } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';

@Component({
    selector: 'app-liste-clients',
    templateUrl: './liste-clients.component.html',
    styleUrls: ['./liste-clients.component.css'],
    providers: [ConseillerService, GerantService]
})
export class ListeClientsComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    conseiller: any = [];

    constructor(public gerantService: GerantService, public router: Router, private activatedRoute: ActivatedRoute
    ) {
        this.conseiller = new Conseiller();
    }

    // Ici changer le "4" par la valeur de l'id du conseiller qui s'est identifié
    ngOnInit() {
        this.conseiller = this.afficherConseiller(this.idCons);
    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data, 
            error => console.log('error in service'));
    }
}
