import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  obj: any = { titre: '', id: '',third:'' };
  constructor(private pr: PrevmesuServicesService, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService) {

    this.obj.titre = data.name
    this.obj.id = data.id
    this.obj.third = data.third
  }

  popForm = this.formBuilder.group({
    titre: ['', [Validators.required, Validators.minLength(3)]],
    description: ['']
  });

  updateobj: any = { titre: '', description: ''};

  saveForm() {
      switch (this.obj.titre) {
        case 'domaine':
          this.pr.addDomaine(this.popForm.value).subscribe(data => console.log(data))
          this.toastr.success('Ajouté avec succés',' Instance '+ this.obj.titre )
          break;
        case 'risque':
          const formDat: any = {
            ...this.popForm.value,
            domaine_id: this.obj.third
          };
          this.pr.addRisque(formDat,this.obj.third).subscribe(data => console.log(data))
          this.toastr.success('Ajouté avec succés',' Instance '+ this.obj.titre )
          break;
        case 'mesure':
          const formData: any = {
            ...this.popForm.value,
            risque_id: this.obj.third
          };
          this.pr.addMesure(formData,this.obj.third).subscribe(data => console.log(data))
          this.toastr.success('Ajouté avec succés',' Instance '+ this.obj.titre )
          break;
      }

  }
}
