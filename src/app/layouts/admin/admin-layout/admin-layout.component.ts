import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  constructor(

    private http: HttpClient,
    private router: Router,

  ) {}
submit(){ // logout
  this.http.post('http://localhost:3000/Admin/logout', {}, {withCredentials: true})
  .subscribe(() => this.router.navigate(['/admin/login']));
}


}
