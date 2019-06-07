import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';
import { Adresse } from 'src/app/model/adresse';

@Component({
    selector: 'app-voir-conseiller',
    templateUrl: './voir-conseiller.component.html',
    styleUrls: ['./voir-conseiller.component.css']
})
export class VoirConseillerComponent implements OnInit {

    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};

    constructor(private service: GerantService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.clientDetails = new Conseiller();
        this.clientDetails.adresse = new Adresse();
    }

    ngOnInit() {
    }

}
