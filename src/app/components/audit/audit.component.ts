import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Gerant } from 'src/app/model/gerant';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

    idGerant = this.activatedRoute.snapshot.params['idGerant'];
    gerant: any = [];

    constructor(private service: GerantService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.gerant = this.afficherGerant(this.idGerant);
    }

    afficherGerant(id) {
        return this.service.getGerant(id).subscribe(data => this.gerant = data, error => console.log('error in service'));
    }

}
