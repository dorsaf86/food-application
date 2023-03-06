import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Photos } from '../photos';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent implements OnInit {

  images : Photos[] ;
  imagesForm!: FormGroup;
  messageForm: ''
  selectedPhotos: Photos ={
    img_id: 0,
    img_titre: 'string',
    img_src: 'string'
  };




  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router:Router)  { }



  ngOnInit(): void{
    this. imagesForm= this.formBuilder.group({
      img_titre: [''],
      img_src: ['']

    })

}
onSubmitFrom(){
  console.log('test forma data');

  const formData = {

    img_titre : this.imagesForm.get('img_titre')?.value,
    img_src: this.imagesForm.get('img_src')?.value,

  }

  console.log(formData);


  this.apiService.createPhotos(formData).subscribe(data => {
    this.router.navigate(['']);
  });


  }
}





