import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { PopupComponent } from '../popup/popup.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-domaine-id-risques',
  templateUrl: './domaine-id-risques.component.html',
  styleUrls: ['./domaine-id-risques.component.css']
})
export class DomaineIdRisquesComponent {
  n=''
  obj:any
  dataArray:any=[]
  constructor(private route: Router, private pr : PrevmesuServicesService ,private aroute:ActivatedRoute, private dialogRef: MatDialog, private toastr: ToastrService) {

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
  dataris={
    titre:'',
    description:'',
    id:0,
    domaine_id:0
  }
  getdata(id:any,titre:any,description:any,domaine_id:any){
    this.dataris.id=id
    this.dataris.titre=titre
    this.dataris.description=description
    this.dataris.domaine_id=domaine_id
  }

  updatenewstudent(f:any){
    const { id, ...dataWithoutId } = this.dataris;
    console.log(dataWithoutId)
    this.pr.updateRisque(dataWithoutId,this.dataris.domaine_id,this.dataris.id).subscribe(data => console.log(data))
    this.toastr.info('Modifié avec succés',' Instance risque')

  }
  delete(domid:any,id:any){
    this.pr.deleteRisque(domid,id).subscribe(data => console.log(data))
    this.toastr.error('Supprimé avec succés',' Instance risque')
  }


}
