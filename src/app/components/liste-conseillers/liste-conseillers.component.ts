import { Component, OnInit } from '@angular/core';
import { GerantService } from 'src/app/services/gerant.service';
import { Gerant } from 'src/app/model/gerant';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-liste-conseillers',
    templateUrl: './liste-conseillers.component.html',
    styleUrls: ['./liste-conseillers.component.css']
})
export class ListeConseillersComponent implements OnInit {

    idGerant = this.activatedRoute.snapshot.params['idGerant'];
    gerant: any = [];

    constructor(public service: GerantService, public router: Router, private activatedRoute: ActivatedRoute) {
        this.gerant = new Gerant();
    }

    ngOnInit() {
        this.gerant = this.afficherGerant(this.idGerant);
    }

    afficherGerant(id) {
        return this.service.getGerant(id).subscribe(data => this.gerant = data, error => console.log('error in service'));
    }

}
