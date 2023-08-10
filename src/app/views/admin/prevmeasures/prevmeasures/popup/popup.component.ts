import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  obj: any = { titre: '', id: '' };
  constructor(private pr: PrevmesuServicesService, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.obj.titre = data.name
    this.obj.id = data.id
  }

  popForm = this.formBuilder.group({
    titre: ['', [Validators.required, Validators.minLength(3)]],
    description: ['']
  });

  saveForm() {
    if (this.obj.id == 'new') {

      switch (this.obj.titre) {
        case 'domaine':
          this.pr.addDomaine(this.popForm.value).subscribe(data => console.log(data))
          break;
        case 'r':
          console.log('Case r');
          break;
        case 'm':
          console.log('Case m');
          break;
      }



    } else {
      //this.obj.titre
    }

   // console.log('Form data is ', this.popForm.value);
  }
}
