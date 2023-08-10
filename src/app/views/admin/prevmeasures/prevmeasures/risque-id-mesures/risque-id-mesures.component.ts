import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { PopupComponent } from '../popup/popup.component';

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
  constructor(private route: Router, private pr : PrevmesuServicesService ,private aroute:ActivatedRoute , private dialogRef: MatDialog) {

    this.aroute.params.subscribe(data=>this.n=data['id'])
    this.aroute.params.subscribe(data=>this.num=data['idr'])
    this.pr.getrisquebyid(this.n,this.num).subscribe(data=>{this.obj=data})
    this.pr.getAllmesures(this.num).subscribe(data=>{this.dataArray=data})
  }
  goToDetails(mes:any) {
    this.route.navigate(['/admin/prevmeasures/mesures/'+this.num+'/'+mes])
  }
  openDialog(risid:any) {
    const dialogRef = this.dialogRef.open(PopupComponent, {
      data: {
        name: 'mesure',id:'new',third:risid
      },
      width: '600px' // Width should be included in the configuration object
    });
  }
  openDialogupdate(num:any) {
    const dialogRef = this.dialogRef.open(PopupComponent, {
      data: {
        name: 'mesure', id:num,third:'0'
      },
      width: '600px' // Width should be included in the configuration object
    });
  }
}
