import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { PrevmesuServicesService } from 'src/app/services/admin/prevmesu-services.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent  {


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private pr: PrevmesuServicesService
  ) {}
  form = this.formBuilder.group({
      email: [''],
      password: ['']
  });


  // submit(): void {
  //   this.http.post('http://localhost:3000/Admin/login', this.form.getRawValue()).subscribe(() => this.router.navigate(['/Admin']));

  // }
  submit(): void {
    this.pr.loginService(this.form.value).subscribe(() => this.router.navigate(['/admin']))

 }

}
