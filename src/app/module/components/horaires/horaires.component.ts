import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Opens } from 'src/app/opens';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {

  horaire: Opens[] | undefined;

  selectedOpens: Opens = {
    id_horaire: 0,
    jour: 'string',
    ouverture: 'HH:MM',
    fermeture: 'HH:MM',
  }


  constructor(private apiService: ApiService,
     fb: FormBuilder,
     private router: Router){ }

  ngOnInit(): void {

    this.apiService.readHoraires().subscribe((horaire: Opens[])=>{
      this.horaire = horaire;
      console.log(this.horaire);
    });
  }


      updateHoraires(id_horaire: any){
        this.apiService.updateHoraires(id_horaire).subscribe(()=>{
          console.log("Photos updated, ", Opens);
        });
      }
    }




