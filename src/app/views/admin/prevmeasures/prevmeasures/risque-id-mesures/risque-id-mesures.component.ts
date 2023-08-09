import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-risque-id-mesures',
  templateUrl: './risque-id-mesures.component.html',
  styleUrls: ['./risque-id-mesures.component.css']
})
export class RisqueIdMesuresComponent {
  n=''
  num=''
  obj:any
  dataArray:any=[]
  constructor(private route: Router, private pr : PrevmesuServicesService ,private aroute:ActivatedRoute) {

    this.aroute.params.subscribe(data=>this.n=data['id'])
    this.aroute.params.subscribe(data=>this.num=data['idr'])
    this.pr.getrisquebyid(this.n,this.num).subscribe(data=>{this.obj=data})
    this.pr.getAllmesures(this.num).subscribe(data=>{this.dataArray=data})
  }
  goToDetails(mes:any) {
    this.route.navigate(['/admin/prevmeasures/mesures/'+this.num+'/'+mes])
  }

}
