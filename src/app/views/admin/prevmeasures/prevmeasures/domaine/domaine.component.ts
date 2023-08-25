import { Component, OnInit , Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ToastrService } from 'ngx-toastr';
import * as sha1 from 'js-sha1';
@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit,OnChanges {
  dataArray: any = []
  @Input() newDataHash = '0'
  constructor(private route: Router, private pr: PrevmesuServicesService, private dialogRef: MatDialog, private toastr: ToastrService) {


  }
  ngOnInit(): void {
    this.pr.getAlldomaines().subscribe(data => { this.dataArray = data
    this.newDataHash = sha1(JSON.stringify(data)); })

  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  goToDetails(num: any) {
    this.route.navigate(['/admin/prevmeasures/domaines/' + num])
  }

  openDialog() {
    const dialogRef = this.dialogRef.open(PopupComponent, {
      data: {
        name: 'domaine',id:'new',third:'0'
      },
      width: '600px' // Width should be included in the configuration object
    });
  }
  datadom={
    titre:'',
    description:'',
    id:0,
  }
  getdata(id:any,titre:any,description:any){
    this.datadom.id=id
    this.datadom.titre=titre
    this.datadom.description=description
  }

  updatenewstudent(f:any){
    let data=f.value
    this.pr.updateDomaine(data,this.datadom.id).subscribe(data => console.log(data))
    // this.pr.getAlldomaines().subscribe(data => { this.dataArray = data
    // this.newDataHash = sha1(JSON.stringify(data)); })
    this.toastr.info('Modifié avec succés',' Instance domaine')

  }

  delete(id:any){
    this.pr.deleteDomaine(id).subscribe(data => console.log(data))
    // this.pr.getAlldomaines().subscribe(data => { this.dataArray = data
    // this.newDataHash = sha1(JSON.stringify(data)); })
    this.toastr.error('Supprimé avec succés',' Instance domaine')
  }


}
