import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-mesure-id',
  templateUrl: './mesure-id.component.html',
  styleUrls: ['./mesure-id.component.css']
})
export class MesureIdComponent{
  n=''
  num=''
  obj:any
  dataArray:any=[]
  constructor( private pr : PrevmesuServicesService ,private aroute:ActivatedRoute) {

    this.aroute.params.subscribe(data=>this.n=data['id'])
    this.aroute.params.subscribe(data=>this.num=data['idr'])
    this.pr.getmesurebyid(this.n,this.num).subscribe(data=>{this.obj=data})
  }

}
