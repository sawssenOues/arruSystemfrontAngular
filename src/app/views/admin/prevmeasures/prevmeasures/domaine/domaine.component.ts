import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent {
  dataArray:any=[]
  constructor(private route: Router, private pr : PrevmesuServicesService) {

    this.pr.getAlldomaines().subscribe(data=>{this.dataArray=data})
  }
  goToDetails(num:any) {
    this.route.navigate(['/admin/prevmeasures/domaines/'+num])
  }



}
