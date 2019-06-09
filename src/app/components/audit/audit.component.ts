import { Component, OnInit, Input, NgIterable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Gerant } from 'src/app/model/gerant';
import { Conseiller } from 'src/app/model/conseiller';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.css'],
    providers: [GerantService, ConseillerService]
})
export class AuditComponent implements OnInit {

    idGerant = this.activatedRoute.snapshot.params['idGerant'];
    gerant: any = [];
    // @Input()
    // NgForOf: NgIterable<Consiller>;
    conseiller: any = [];
    valeurTrueFalse: boolean = false;
    audit: FormGroup;
    tousClients: any = [];

    // tslint:disable-next-line: max-line-length
    constructor(private conseillerService: ConseillerService, private service: GerantService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {
        this.gerant = new Gerant();
        // this.gerant.listeConseillers = new Array<conseiller)>; //new Conseiller{};
        this.conseiller = new Conseiller();

    }

    ngOnInit() {
        this.gerant = this.afficherGerant(this.idGerant);

        this.tousClients = this.recupererTousClients();

        this.audit = this.fb.group({
        });
        // this.conseiller = this.afficherConseiller(this.)
    }

    afficherGerant(id) {
        return this.service.getGerant(id).subscribe(data => this.gerant = data, error => console.log('error in service'));
    }

    realiserAudit() {
        this.valeurTrueFalse = true;
    }

    validerAudit() {
        // this.valeurTrueFalse = true;
    }

    recupererTousClients() {
        return this.conseillerService.getClients().subscribe(data => this.tousClients = data, error => console.log('error in service'))
    }


}
