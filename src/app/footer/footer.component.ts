import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Opens } from '../opens';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  horaire: Opens[] | undefined;

  selectedOpens: Opens = {
    id_horaire: 0,
    jour: 'string',
    ouverture: 'HH:MM',
    fermeture: 'HH:MM',
  }

  constructor(private apiService: ApiService,
    fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.readHoraires().subscribe((horaire: Opens[])=>{
      this.horaire = horaire;
      console.log(this.horaire);
    });
  }

}
