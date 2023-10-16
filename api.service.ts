import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { URLConstants } from './url.constant';
@Injectable({
  providedIn: 'root'
 
})
export class ApiService {
  
  constructor(private rest: RestService) { }

  searchHotel() {
    return this.rest.makeAuthorizedGetRequest(URLConstants().API.GET_SEARCH_HOTEL)

  }

   

  Hotelrooms() {
    return this.rest.makeAuthorizedGetRequest(URLConstants().API.GET_HOTEL_ROOMS)

  }
}

