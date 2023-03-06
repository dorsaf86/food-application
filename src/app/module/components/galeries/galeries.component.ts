import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/photos';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-galeries',
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.css']
})
export class GaleriesComponent implements OnInit{

  images: Photos[] | undefined ;

  selectedPhotos: Photos = {
    img_id: 0,
    img_titre: 'string',
    img_src: 'string',

  }

myImage!: string;
title!: string;
data!: string

     constructor(private apiService: ApiService,
      fb: FormBuilder,
      private router:Router) { }


      ngOnInit(): void {



        this.apiService.readImages().subscribe((images: Photos[])=>{
          this.images = images;
          console.log(this.images);
        });
      }

      onAddNewPhotos() {
        this.router.navigateByUrl('/add')
      }

       updatePhotos(img_id:any){
    this.apiService.updatePhotos(img_id).subscribe(()=>{
      console.log("Photos updated, ", Photos);
    });
  }

      deletePhotos(img_id: any ){
        this.apiService.deletePhotos(img_id).subscribe((photos: Photos)=>{
          console.log("Photos deleted, ", photos);
        });
      }



        }



