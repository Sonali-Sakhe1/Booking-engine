import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public Hotelrooms: any
  roomsList: any;
  item: any;
  roomsName: any;
  currency: any;
  roomsValue: any;

  constructor(private http: HttpClient,private Api:ApiService) {

  }

  ngOnInit(): void {
  this.Api.Hotelrooms().subscribe((roomsData) => {
  this.roomsList = roomsData;
  this.roomsName = roomsData; // Assign fetched room data to the 'roomsList' property
  this.roomsValue = roomsData.HotelDetails.rooms;
  console.log("roooms data is", this.roomsValue)
  console.log("roooms data is", this.roomsList)

});

  }

}
