import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/tables';
import { ApiService } from 'src/app/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  tables: Tables[] | undefined;

  selectedPhotos: Tables = {
    id_Reservation: 0,
    email: 'string',
    username: 'string',
    date: 'medium',
    time: 'HH:MM',

  }

  constructor(private apiService: ApiService,
    fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.readReservation().subscribe((tables: Tables[])=>{
      this.tables = tables;
      console.log(this.tables);
    });
  }
  }


