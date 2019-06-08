import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { VoirClientComponent } from './components/voir-client/voir-client.component';
import { AuditComponent } from './components/audit/audit.component';
import { ConfirmerVirementComponent } from './components/confirmer-virement/confirmer-virement.component';
import { CreerClientComponent } from './components/creer-client/creer-client.component';
import { EffectuerVirementComponent } from './components/effectuer-virement/effectuer-virement.component';
import { HistoriqueOperationsComponent } from './components/historique-operations/historique-operations.component';
import { ListeConseillersComponent } from './components/liste-conseillers/liste-conseillers.component';
import { ModifierClientComponent } from './components/modifier-client/modifier-client.component';
import { VoirConseillerComponent } from './components/voir-conseiller/voir-conseiller.component';

const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'authentification' },
    { path: 'liste-clients/:idCons', component: ListeClientsComponent },
    { path: 'authentification', component: AuthentificationComponent },
    { path: 'voir-client/:idCons/:idClient', component: VoirClientComponent },
    { path: 'audit/:idGerant', component: AuditComponent },
    { path: 'confirmer-virement/:idCons', component: ConfirmerVirementComponent },
    { path: 'creer-client/:type/:idCons', component: CreerClientComponent },
    { path: 'effectuer-virement/:idCons', component: EffectuerVirementComponent },
    { path: 'historique-operations/:idCons/:idClient', component: HistoriqueOperationsComponent },
    { path: 'liste-conseillers/:idGerant', component: ListeConseillersComponent },
    { path: 'modifier-client/:idCons/:idClient', component: ModifierClientComponent },
    { path: 'voir-conseiller/:idGerant/:idCons', component: VoirConseillerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
