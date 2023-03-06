import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Plats } from '../plats';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent {

  categForm!: FormGroup
  selectedOption = 'string';

  categories = [
    { value: 'plats' },
    { value: 'entrée' },
    { value: 'dessert' },
    { value: 'grillade'},
    { value: 'autres saveurs'}


  ]
  selectedPlats: Plats= {
  idCategorie: 0,
   name_categorie: 'string',
   idPlat: 0,
   titre: 'string',
   prix: 0,
   description: 'text'

  };

  categorieList = []
  selectedCategorie = ''


  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router) { }


    ngOnInit(): void {
      this.categForm = this.fb.group({ // crée une instance de FormGroup
        idCategorie: [null],
        titreAutre: [null],
        titre: [null],
        prix: [null],
        description: [null],
      });
      this.getCategorie()
    }
      getCategorie() :void {
      this.apiService.getCategorie().subscribe(data => {
        console.log(data)
        this.categorieList = data
        // this.router.navigate(['./galeries']);
      });
    }
    onSubmitFrom(): void {
      const formData = {
        idCategorie: this.categForm.get('idCategorie')?.value,
        titreAutre: this.categForm.get('titreAutre')?.value,
        titre: this.categForm.get('titre')?.value,
        prix: this.categForm.get('prix')?.value,
        description: this.categForm.get('description')?.value,
      }
      console.log(formData);

      this.apiService.createCategorie(formData).subscribe(data => {
        this.router.navigate(['']);
      });


}
}
