import { Component, OnInit } from '@angular/core';
import { GerantService } from 'src/app/services/gerant.service';
import { Gerant } from 'src/app/model/gerant';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-conseillers',
    templateUrl: './liste-conseillers.component.html',
    styleUrls: ['./liste-conseillers.component.css']
})
export class ListeConseillersComponent implements OnInit {

    conseillers: any = [];
    gerant: any = [];

    constructor(public service: GerantService, public router: Router) {
        this.gerant = new Gerant();
    }

    ngOnInit() {
        this.afficherConseillers();
        this.afficherGerant(this.gerant.id = 16);
    }

    afficherConseillers() {
        return this.service.getConseillers().subscribe(data => this.conseillers = data, error => console.log('error in service'));
    }

    afficherGerant(id) {
        return this.service.getGerant(id).subscribe(data => this.gerant = data, error => console.log('error in service'));
    }

}
