import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Plats } from '../plats';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  cartes: Plats[] | undefined;

  selecteCarte:  Plats= {
 idPlat : 0,
 titre : 'string',
 description : 'text',
 prix : 0,
 idCategorie : 0,
 name_categorie : 'string',
  }

  constructor( private apiService: ApiService,
    fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {

    this.apiService.readCarte().subscribe((cartes: Plats[])=>{
      this.cartes = cartes;
      console.log(this.cartes);
    });
    //appel au methode declarer dans le service api pour lire ma table de bdd
  }
  onAddNewCarte() {
    this.router.navigateByUrl('/new-categorie');
  }


}
