import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  loginbtn: boolean;
  role: string;
  isClient: boolean = false;
  isAdmin: boolean = false;
  logoutbtn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) {
    if (this.apiService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      const user = apiService.getToken()
      const role = user.ROLE
      this.isClient = role === 'client'
      this.isAdmin = role === 'admin'
      this.logoutbtn = true && role === 'client'
      //les roles et connecxion au espace concerné
    }
    else {
      this.logoutbtn = false
      this.loginbtn = true;
      this.isClient = false
      this.isAdmin = false
    }
  }

  ngOnInit() { }
//les fonctions declarer par les bouttons dans le template

  onEspaceClient() {
    this.router.navigateByUrl('/header-client');
  }
  onEspaceAdmin() {
    this.router.navigateByUrl('/admin');
  }
//methode boutton logout qui apparait quand le client est connecté
  logout() {
    this.apiService.deleteToken();
    this.logoutbtn = false
    this.loginbtn = true;
    this.isClient = false
    this.isAdmin = false
  }
}
