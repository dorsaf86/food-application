import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  loginbtn:boolean;
  logoutbtn:boolean;
  currentUser: any;

  constructor(private apiService: ApiService ) {
    apiService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.apiService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
//authetification

}
private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}

logout()
{
  this.apiService.deleteToken();
  window.location.href = window.location.href;
}
  }



