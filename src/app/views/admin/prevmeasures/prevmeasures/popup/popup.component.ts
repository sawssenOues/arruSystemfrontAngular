import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

obj:any
  constructor(private formBuilder:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any){

    this.obj = data.name
  }

  popForm = this.formBuilder.group({
    titre:['',Validators.required,Validators.minLength(3)],
    description:['']
  });

  saveForm(){
    console.log('Form data is ', this.popForm.value);
  }
}
