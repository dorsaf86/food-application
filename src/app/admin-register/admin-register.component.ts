import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  adminForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void{
    this. adminForm= this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null]

  });


  }


onSubmitForm(): void {
console.log(this.adminForm.value)
}

}


