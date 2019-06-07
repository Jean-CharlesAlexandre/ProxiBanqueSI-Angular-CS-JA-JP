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
    { path: 'liste-clients', component: ListeClientsComponent },
    { path: 'authentification', component: AuthentificationComponent },
    { path: 'voir-client/:id', component: VoirClientComponent },
    { path: 'audit', component: AuditComponent },
    { path: 'confirmer-virement', component: ConfirmerVirementComponent },
    { path: 'creer-client', component: CreerClientComponent },
    { path: 'effectuer-virement', component: EffectuerVirementComponent },
    { path: 'historique-operations', component: HistoriqueOperationsComponent },
    { path: 'liste-conseillers', component: ListeConseillersComponent },
    { path: 'modifier-client/:id', component: ModifierClientComponent },
    { path: 'voir-conseiller/:id', component: VoirConseillerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
