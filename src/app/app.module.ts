import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { VoirClientComponent } from './components/voir-client/voir-client.component';
import { ListeClientsComponent } from './components/liste-clients/liste-clients.component';
import { ListeConseillersComponent } from './components/liste-conseillers/liste-conseillers.component';
import { VoirConseillerComponent } from './components/voir-conseiller/voir-conseiller.component';
import { AuditComponent } from './components/audit/audit.component';
import { CreerClientComponent } from './components/creer-client/creer-client.component';
import { ModifierClientComponent } from './components/modifier-client/modifier-client.component';
import { HistoriqueOperationsComponent } from './components/historique-operations/historique-operations.component';
import { EffectuerVirementComponent } from './components/effectuer-virement/effectuer-virement.component';
import { ConfirmerVirementComponent } from './components/confirmer-virement/confirmer-virement.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthentificationComponent,
        VoirClientComponent,
        ListeClientsComponent,
        ListeConseillersComponent,
        VoirConseillerComponent,
        AuditComponent,
        CreerClientComponent,
        ModifierClientComponent,
        HistoriqueOperationsComponent,
        EffectuerVirementComponent,
        ConfirmerVirementComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
