import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent {
  dataArray: any = []
  constructor(private route: Router, private pr: PrevmesuServicesService, private dialogRef: MatDialog) {

    this.pr.getAlldomaines().subscribe(data => { this.dataArray = data })
  }
  goToDetails(num: any) {
    this.route.navigate(['/admin/prevmeasures/domaines/' + num])
  }

  openDialog() {
    const dialogRef = this.dialogRef.open(PopupComponent, {
      data: {
        name: 'domaine'
      },
      width: '600px' // Width should be included in the configuration object
    });
  }


}
