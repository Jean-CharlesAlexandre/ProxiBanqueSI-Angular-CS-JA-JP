import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerantService } from 'src/app/services/gerant.service';
import { Conseiller } from 'src/app/model/conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-effectuer-virement',
    templateUrl: './effectuer-virement.component.html',
    styleUrls: ['./effectuer-virement.component.css'],
    providers: [ConseillerService, GerantService]
})
export class EffectuerVirementComponent implements OnInit {

    idCons = this.activatedRoute.snapshot.params['idCons'];
    conseiller: any = [];
    virement: FormGroup;

    // tslint:disable-next-line: max-line-length
    constructor(public gerantService: GerantService, public router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
        this.conseiller = new Conseiller();
    }

    ngOnInit() {
        this.conseiller = this.afficherConseiller(this.idCons);

        this.virement = this.fb.group({montant: ['', Validators.required]
        });

    }

    afficherConseiller(id) {
        return this.gerantService.getConseiller(id).subscribe(data => this.conseiller = data,
            error => console.log('error in service'));
    }

     onSubmit() {
        // this.clientDetails.nom = this.createClientForm.value.nom;  // montant

        console.log(this.conseiller);
    }

}
