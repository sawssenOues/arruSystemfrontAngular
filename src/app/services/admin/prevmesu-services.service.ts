import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevmesuServicesService {

  constructor(private http:HttpClient) { }

  getAlldomaines(){
    return this.http.get('http://localhost:3000/Admin/Domaines/').pipe(catchError(this.errorHandler))
  }
  getdomainebyid(num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ num ).pipe(catchError(this.errorHandler))
  }
  
  addDomaine(form:any){
    return this.http.post('http://localhost:3000/Admin/Domaines/ajout',form).pipe(catchError(this.errorHandler))
  }


  getAllrisques(num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ num +'/Risques/').pipe(catchError(this.errorHandler))
  }
  getrisquebyid(n:any,num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ n +'/Risques/'+ num ).pipe(catchError(this.errorHandler))
  }


  getAllmesures(num:any){
    return this.http.get('http://localhost:3000/Admin/Risques/'+ num +'/Mesures' ).pipe(catchError(this.errorHandler))
  }
  getmesurebyid(n:any,num:any){
    return this.http.get('http://localhost:3000/Admin/Risques/'+ n +'/Mesures/'+ num ).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
