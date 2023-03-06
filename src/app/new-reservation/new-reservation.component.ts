import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { reservation } from '../reservation';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  reservation: reservation[] | undefined;
  placeRester = ''
  hallForm!: FormGroup;

  messageForm = ''
  selectedOption = 1;
  nbPersonnes = [1, 2, 3, 4, 5]
  timeSelected = ''

  times = [
    { timeSlot: '12:00', value: '12:00' },
    { timeSlot: '12:15', value: '12:15' },
    { timeSlot: '12:30', value: '12:30' },
    { timeSlot: '12:45', value: '12:45' },
    { timeSlot: '13:00', value: '13:00' },
    { timeSlot: '13:15', value: '13:15' },
    { timeSlot: '13:30', value: '13:30' },
    { timeSlot: '13:45', value: '13:45' },
    { timeSlot: '14:00', value: '14:00' },
    { timeSlot: '19:00', value: '19:00' },
    { timeSlot: '19:15', value: '19:15' },
    { timeSlot: '19:30', value: '19:30' },
    { timeSlot: '19:45', value: '19:45' },
    { timeSlot: '20:00', value: '20:00' },
    { timeSlot: '20:30', value: '20:30' },
    { timeSlot: '21:00', value: '21:00' },
    { timeSlot: '21:30', value: '21:30' },
    { timeSlot: '22:00', value: '22:00' },
  ]
  ChangeCreneaux(e: any) {
    console.log(e.target.value)
  }
  SendDataonChange(event: any) {
    console.log(event.target.value);
  }

  constructor(private apiService: ApiService,
     private formBuilder : FormBuilder,
     private router : Router
    ){}

  date1 = new Date();



  ngOnInit(): void {

    this.hallForm = this.formBuilder.group({
      username: [null],
      Email: [null],
      date: [null],
      time: [null],
      allergy: [null],
      nbPersonnes: [null]

    })
    this.apiService.getNbrReservation({ date: new Date().toISOString().slice(0, 10) }).subscribe({
      next: (response) => { this.placeRester = response },
      error: (error) => console.log(error)

    })



    let allergy = null
    let nbPersonnes = null
    let email = null
    let username = null
    if (this.apiService.isLoggedIn) {

      const user = this.apiService.getToken()
      allergy = user.allergy
      nbPersonnes = user.nbPersonnes
      username = user.username
      email = user.email
      this.selectedOption = nbPersonnes
    }

    this.hallForm = this.formBuilder.group({
      username: [username],
      Email: [email],
      date: [null],
      time: [null],
      allergy: [allergy],
      nbPersonnes: [nbPersonnes]

    })




    this.apiService.getNbrReservation({ date: new Date().toISOString().slice(0, 10) }).subscribe({
      next: (response) => { this.placeRester = response },
      error: (error) => console.log(error)

    })




  }

  onSubmitForm() {
    console.log('test forma data');
    const formData = {
      username: this.hallForm.get('username')?.value,
      email: this.hallForm.get('Email')?.value,
      date: this.hallForm.get('date')?.value,
      time: this.hallForm.get('time')?.value,
      allergy: this.hallForm.get('allergy')?.value,
      nbPersonnes: this.hallForm.get('nbPersonnes')?.value,
    }

    console.log(formData);


    this.apiService.createReservation(formData).subscribe({
      next: (response) => { this.messageForm = response },
      error: (error) => console.log(error)

    })
  }


}

