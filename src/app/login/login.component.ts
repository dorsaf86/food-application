import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthGuardService } from '../auth-guard.service';
import { AuthGuard } from '../auth.guard';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  angForm: FormGroup;
  activatedRoute: any;
  retUrl: any;



  constructor(
          private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder) {

    this.angForm = this.fb.group({

      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      retUrl: "",

    });
  }

  ngOnInit() {
//     this.activatedRoute.queryParamMap
//     .subscribe(params => {
// this.retUrl = params.get('retUrl');
// console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
// });

  }

  onSubmitForm() {
    const email = this.angForm.get('email')?.value
    const password = this.angForm.get('password')?.value
    // verification input
    //  code ...
    let data = {
      email, password
    }
    this.postdata(data)
  }
  postdata(data: any) {
    this.apiService.userlogin(data.email, data.password)
      .pipe(first())
      .subscribe(

        data => {
          // const redirect = this.apiService.redirectUrl ?this.apiService.redirectUrl : '/acceuil';
          console.log(data);
          if(data.length){
            this.apiService.setToken(data[0])
            this.router.navigate(['']);
          }



        },

        error => {
          alert("user ou password incorrect ")
        });



  }
  getEmail() { return this.angForm.get('email'); }
  getPassword() { return this.angForm.get('password'); }

}





