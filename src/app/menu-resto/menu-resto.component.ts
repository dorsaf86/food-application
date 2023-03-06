import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Elements } from '../elements';

@Component({
  selector: 'app-menu-resto',
  templateUrl: './menu-resto.component.html',
  styleUrls: ['./menu-resto.component.css']
})
export class MenuRestoComponent implements OnInit {

  formules: Elements[] | undefined;

  selectedMenu: Elements = {
    idFormule: 0,
    prix: 0,
    description: 'text',
    formule_name: 'string',
    idMenu: 0,
    titre: 'string',
  }

  groupBy(arr, property) {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  constructor(
    private apiService: ApiService,
    fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.readElements().subscribe((formules: Elements[]) => {
      this.formules = formules;
      console.log(this.formules);




      const objOfObjs = this.groupBy(formules, 'titre');
      const arrayOfObj = Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } ));
      console.log(arrayOfObj);

    });

  }
  OnAddMenu() {
    this.router.navigateByUrl('/create')
  }


  updateMenu(idFormule: any) {
    this.apiService.updateMenu(idFormule).subscribe(() => {
      console.log("Photos updated, ", Elements);
    });

  }
}


