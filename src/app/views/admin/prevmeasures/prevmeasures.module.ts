import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevmeasuresRoutingModule } from './prevmeasures-routing.module';
import { PrevmeasuresComponent } from './prevmeasures/prevmeasures.component';
import { DomaineComponent } from './prevmeasures/domaine/domaine.component';
import { DomaineIdRisquesComponent } from './prevmeasures/domaine-id-risques/domaine-id-risques.component';
import { RisqueIdMesuresComponent } from './prevmeasures/risque-id-mesures/risque-id-mesures.component';
import { MesureIdComponent } from './prevmeasures/mesure-id/mesure-id.component';


@NgModule({
  declarations: [
    PrevmeasuresComponent,
    DomaineComponent,
    DomaineIdRisquesComponent,
    RisqueIdMesuresComponent,
    MesureIdComponent
  ],
  imports: [
    CommonModule,
    PrevmeasuresRoutingModule
  ]
})
export class PrevmeasuresModule { }
