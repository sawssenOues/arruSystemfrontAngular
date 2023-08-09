import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-domaine-id-risques',
  templateUrl: './domaine-id-risques.component.html',
  styleUrls: ['./domaine-id-risques.component.css']
})
export class DomaineIdRisquesComponent {
  n=''
  obj:any
  dataArray:any=[]
  constructor(private route: Router, private pr : PrevmesuServicesService ,private aroute:ActivatedRoute) {

    this.aroute.params.subscribe(data=>this.n=data['id'])
    this.pr.getdomainebyid(this.n).subscribe(data=>{this.obj=data})
    this.pr.getAllrisques(this.n).subscribe(data=>{this.dataArray=data})
  }
  goToDetails(num:any) {
    this.route.navigate(['/admin/prevmeasures/risques/'+this.n+'/'+num])
  }
}
