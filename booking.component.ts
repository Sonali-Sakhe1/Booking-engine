import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public SearchHotel: any
  public Hotelrooms: any
  public getJsonValue: any;
  public postJsonValue: any;
  roomsList: any;
  selectedRoom: string = ''

  constructor(private http: HttpClient,private Api:ApiService) { 
   
  }

  ngOnInit(): void {
  this.Api.searchHotel().subscribe((data)=>{
    console.log(data);
    this.SearchHotel=data;
  })

this.Api.Hotelrooms().subscribe((roomData) => {
    this.roomsList = roomData; // Assign fetched room data to the 'roomsList' property
  });

  }

    onClick() {
    console.log(this.selectedRoom)
  }

  
  
}

  
