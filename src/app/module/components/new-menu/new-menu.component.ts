import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  menuForm! : FormGroup

  constructor( private fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.menuForm = this.fb.group({ // crée une instance de FormGroup
      titre: [null],
      prix: [null],
      description: [null],
      formule_complete: [false],
      formule_tiers: [false],
      formule_unique: [false]


     });
  }
onSubmitFrom(): void{
  console.log('hall form value',this.menuForm.value);
}

}
