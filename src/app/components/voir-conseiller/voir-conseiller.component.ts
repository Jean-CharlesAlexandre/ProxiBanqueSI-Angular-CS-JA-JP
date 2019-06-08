import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';
import { Adresse } from 'src/app/model/adresse';
import { Gerant } from 'src/app/model/gerant';

@Component({
    selector: 'app-voir-conseiller',
    templateUrl: './voir-conseiller.component.html',
    styleUrls: ['./voir-conseiller.component.css']
})
export class VoirConseillerComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    idGerant = this.activatedRoute.snapshot.params['idGerant'];
    gerant: any = [];
    conseillerDetails: any = {};

    constructor(private service: GerantService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.conseillerDetails = new Conseiller();
        this.conseillerDetails.adresse = new Adresse();
        this.gerant = new Gerant();
    }

    ngOnInit() {
        this.service.getConseiller(this.idCons).subscribe((data: {}) => this.conseillerDetails = data);
        this.gerant = this.afficherGerant(this.idGerant);
    }

    afficherGerant(id) {
        return this.service.getGerant(id).subscribe(data => this.gerant = data, error => console.log('error in service'));
    }

}
