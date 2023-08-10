import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-domaine-id-risques',
  templateUrl: './domaine-id-risques.component.html',
  styleUrls: ['./domaine-id-risques.component.css']
})
export class DomaineIdRisquesComponent {
  n=''
  obj:any
  dataArray:any=[]
  constructor(private route: Router, private pr : PrevmesuServicesService ,private aroute:ActivatedRoute, private dialogRef: MatDialog) {

    this.aroute.params.subscribe(data=>this.n=data['id'])
    this.pr.getdomainebyid(this.n).subscribe(data=>{this.obj=data})
    this.pr.getAllrisques(this.n).subscribe(data=>{this.dataArray=data})
  }
  goToDetails(num:any) {
    this.route.navigate(['/admin/prevmeasures/risques/'+this.n+'/'+num])
  }
  openDialog(domid:any) {
    const dialogRef = this.dialogRef.open(PopupComponent, {
      data: {
        name: 'risque',id:'new',third:domid
      },
      width: '600px' // Width should be included in the configuration object
    });
  }
  openDialogupdate(num: any) {
    this.pr.getdomainebyid(num).subscribe(data => {
      const auxObj: any = data;
      const dialogRef = this.dialogRef.open(PopupComponent, {
        data: {
          name: 'risque',
          id: num,
          third: '0'
        },
        width: '600px'
      });


    });
  }


}
