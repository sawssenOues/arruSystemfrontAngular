import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevmesuServicesService {

  constructor(private http:HttpClient) { }

  getAlldomaines(){
    return this.http.get('http://localhost:3000/Admin/Domaines/',{withCredentials: true}).pipe(catchError(this.errorHandler))
  }
  getdomainebyid(num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ num,{withCredentials: true} ).pipe(catchError(this.errorHandler))
  }

  addDomaine(form:any){
    return this.http.post('http://localhost:3000/Admin/Domaines/ajout',form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }

  updateDomaine(form:any,num:any){
    return this.http.put('http://localhost:3000/Admin/Domaines/update/'+ num ,form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }

  deleteDomaine(num:any){
    return this.http.delete('http://localhost:3000/Admin/Domaines/delete/'+ num,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }


  getAllrisques(num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ num +'/Risques/',{withCredentials: true}).pipe(catchError(this.errorHandler))
  }
  getrisquebyid(n:any,num:any){
    return this.http.get('http://localhost:3000/Admin/Domaines/'+ n +'/Risques/'+ num ,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }

  addRisque(form:any,domid:any){
    return this.http.post('http://localhost:3000/Admin/Domaines/'+domid+'/Risques/ajoutRisque',form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }

  updateRisque(form:any,n:any,num:any){
    return this.http.put('http://localhost:3000/Admin/Domaines/'+ n +'/Risques/update/'+ num ,form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }
  deleteRisque(n:any,num:any){
    return this.http.delete('http://localhost:3000/Admin/Domaines/'+ n +'/Risques/delete/'+ num,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }





  getAllmesures(num:any){
    return this.http.get('http://localhost:3000/Admin/Risques/'+ num +'/Mesures',{withCredentials: true} ).pipe(catchError(this.errorHandler))
  }
  getmesurebyid(n:any,num:any){
    return this.http.get('http://localhost:3000/Admin/Risques/'+ n +'/Mesures/'+ num,{withCredentials: true} ).pipe(catchError(this.errorHandler))
  }
  addMesure(form:any,risid:any){
    return this.http.post('http://localhost:3000/Admin/Risques/'+risid+'/Mesures/ajoutMesure',form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }
  updateMesure(form:any,n:any,num:any){
    return this.http.put('http://localhost:3000/Admin/Risques/'+ n +'/Mesures/update/'+ num ,form,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }
  deleteMesure(n:any,num:any){
    return this.http.delete('http://localhost:3000/Admin/Risques/'+ n +'/Mesures/delete/'+ num,{withCredentials: true}).pipe(catchError(this.errorHandler))
  }


  loginService(n:any){
    return this.http.post('http://localhost:3000/Admin/login', n,{withCredentials: true}).pipe(catchError(this.errorHandler))
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
