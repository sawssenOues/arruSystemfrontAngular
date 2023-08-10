import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevmeasuresRoutingModule } from './prevmeasures-routing.module';
import { PrevmeasuresComponent } from './prevmeasures/prevmeasures.component';
import { DomaineComponent } from './prevmeasures/domaine/domaine.component';
import { DomaineIdRisquesComponent } from './prevmeasures/domaine-id-risques/domaine-id-risques.component';
import { RisqueIdMesuresComponent } from './prevmeasures/risque-id-mesures/risque-id-mesures.component';
import { MesureIdComponent } from './prevmeasures/mesure-id/mesure-id.component';
import { PopupComponent } from './prevmeasures/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrevmeasuresComponent,
    DomaineComponent,
    DomaineIdRisquesComponent,
    RisqueIdMesuresComponent,
    MesureIdComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    PrevmeasuresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrevmeasuresModule { }
