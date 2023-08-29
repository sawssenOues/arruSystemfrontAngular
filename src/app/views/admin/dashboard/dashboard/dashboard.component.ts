import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {




  selectedFile: File | null = null;


  imagePath="../../../../../assets/uploads/"

  userArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nom: string ="";
  prenom: string ="";
  date_naiss: string ="";
  email: string ="";
  image: string ="";
  currentuserID = "";
  constructor(private http: HttpClient )
  {
    this.getAlluser();
  }

  ngOnInit(): void {
  }

  getAlluser()
  {
    this.http.get("http://localhost:3000/Admin/users/",{withCredentials: true})
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.userArray = resultData;
    });
  }





  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files![0];
  }

  register(): void {
    const bodyData = {
      nom: this.nom,
      prenom: this.prenom,
      date_naiss: this.date_naiss,
      email: this.email
    };

    const formData = new FormData();
    formData.append('nom', bodyData.nom);
    formData.append('prenom', bodyData.prenom);
    formData.append('date_naiss', bodyData.date_naiss);
    formData.append('email', bodyData.email);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.http.post('http://localhost:3000/Admin/users/ajout/', formData, { withCredentials: true })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Employee Registered Successfully');
        this.getAlluser();
      });
  }
  setUpdate(data: any)
  {


    this.nom= data.nom,
    this.prenom= data.prenom,
    this.date_naiss= data.date_naiss.split('T')[0],
    this.email= data.email
    this.image= data.image
    this.currentuserID = data.id;

  }

  UpdateRecords(): void {
    const bodyData = {
      nom: this.nom,
      prenom: this.prenom,
      date_naiss: this.date_naiss,
      email: this.email
    };

    const formData = new FormData();
    formData.append('nom', bodyData.nom);
    formData.append('prenom', bodyData.prenom);
    formData.append('date_naiss', bodyData.date_naiss);
    formData.append('email', bodyData.email);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.http.put('http://localhost:3000/Admin/users/update/' + this.currentuserID, formData, { withCredentials: true })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('User Updated Successfully');
        this.getAlluser();
      });
  }


  save()
  {
    if(this.currentuserID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }

  }


  setDelete(data: any)
  {
    this.http.delete('http://localhost:3000/Admin/users/delete/'+ data.id,{withCredentials: true} ).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Deletedddd")
        this.getAlluser();
    });
  }
}
