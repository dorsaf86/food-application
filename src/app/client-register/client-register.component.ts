import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { users } from '../users';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit{
   clients : users[] ;
  clientForm!: FormGroup;
  messageForm: string;

  constructor(private formBuilder: FormBuilder,
       private apiService: ApiService,
       private router:Router) {


      }

  ngOnInit(): void{
    this. clientForm= this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],
      nbPersonnes: ['', Validators.required],
      allergy: ['', Validators.required],
      username: ['', Validators.required]
   })
   }
   onSubmitForm() {
    console.log('test forma data');
    const formData = {

      email: this.clientForm.get('email')?.value,
      password: this.clientForm.get('password')?.value,
      nbPersonnes: this.clientForm.get('nbPersonnes')?.value,
      allergy: this.clientForm.get('allergy')?.value,
      username: this.clientForm.get('username')?.value,
//recepuration de valeurs inserer par le client et les enregistrer
    }
  console.log(formData);

  this.apiService.registerClient(formData).subscribe({
    next: (response) => {

      if(response.length){
        this.apiService.setToken(response[0])
        this.router.navigate(['']);
      }
     },

    error: (error) => console.log(error)

  })


  }



}


