import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomaineIdRisquesComponent } from './prevmeasures/domaine-id-risques/domaine-id-risques.component';
import { DomaineComponent } from './prevmeasures/domaine/domaine.component';
import { MesureIdComponent } from './prevmeasures/mesure-id/mesure-id.component';
import { PrevmeasuresComponent } from './prevmeasures/prevmeasures.component';
import { RisqueIdMesuresComponent } from './prevmeasures/risque-id-mesures/risque-id-mesures.component';

const routes: Routes = [
  {path:'',component:PrevmeasuresComponent, children:[
    // tous domaine
    {path:'domaines',component:DomaineComponent},
    //detail domiane + tous risque related
    {path:'domaines/:id',component:DomaineIdRisquesComponent},
    //detail risque + tous mesure related
    {path:'risques/:id/:idr',component:RisqueIdMesuresComponent},
    //detail mesure
    {path:'mesures/:id/:idr',component:MesureIdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrevmeasuresRoutingModule { }
