import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Elements } from '../elements';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  menuForm!: FormGroup
  selectedOption = 'string';
  formule = [
    { value: 'Formule brunch' },
    { value: 'Formule midi' },
    { value: 'Formule soir' }


  ]
  selectedElement: Elements = {
    idFormule: 0,
    prix: 0,
    description: 'text',
    formule_name: 'string',
    idMenu: 0,
    titre: 'string'
  };

  menuList = []
  selectedMenu = ''




  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router) { }




  ngOnInit(): void {
    this.menuForm = this.fb.group({ // crée une instance de FormGroup
      idMenu: [null],
      titreAutre: [null],
      nom_formule: [null],
      prix: [null],
      description: [null],
    });
    this.getMenu()
  }

  getMenu(): void {
    this.apiService.getMenu().subscribe(data => {
      console.log(data)
      this.menuList = data
      // this.router.navigate(['./galeries']);
    });
  }

  onSubmitFrom(): void {
    const formData = {
      idMenu: this.menuForm.get('idMenu')?.value,
      titreAutre: this.menuForm.get('titreAutre')?.value,
      nom_formule: this.menuForm.get('nom_formule')?.value,
      prix: this.menuForm.get('prix')?.value,
      description: this.menuForm.get('description')?.value,
    }
    console.log(formData);

    this.apiService.createMenu(formData).subscribe(data => {
      this.router.navigate(['./galeries']);
    });

  }
}
