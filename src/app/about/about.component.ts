import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Photos } from '../photos';






@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit {

  newArray = [];
  sliderArray = Photos[''];
  imageSize: {};


  constructor(private ApiService: ApiService,
    private fb: FormBuilder,
    private Router:Router) { }

    ngOnInit(): void {


      this.ApiService.getData().subscribe((sliderArray: Photos[])=>{
        this.imageSize = {width: 400, height: 300, space:4};
       this.sliderArray = sliderArray;
       console.log(this.sliderArray);

      // let new Array = new Object();

       for (const slide of this.sliderArray){
        var  Obj= {};
        Obj['image']= slide['img_src'];
        Obj ['thumbImage']= slide ['thumbImage'];
        Obj ['title']= slide['img_titre'];
        Obj ['alt']= '',
        this.newArray.push(Obj);

       }
       console.log('new Array value...'+ JSON.stringify(this.newArray));


       })

    }
    onAddNewReservation() {
      this.Router.navigateByUrl('new-reservation');
    }
    }


