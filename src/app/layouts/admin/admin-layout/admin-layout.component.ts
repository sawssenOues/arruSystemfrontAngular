import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmittersService } from 'src/app/services/admin/emitters.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  constructor(

    private http: HttpClient,
    private router: Router,

  ) {  EmittersService.authEmitter.subscribe(
        (auth: boolean) => console.log(auth)) }


  submit() { // logout
    this.http.post('http://localhost:3000/Admin/logout', {}, { withCredentials: true })
      .subscribe(() => {
        this.router.navigate(['/admin/login'])
        EmittersService.authEmitter.emit(false); // Emit the event here
      });
  }


}
