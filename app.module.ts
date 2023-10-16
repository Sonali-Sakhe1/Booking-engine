import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoomComponent } from './room/room.component';
import { ServiceComponent } from './service/service.component';


// const appRoutes: Routes = [
//   // { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BookingComponent,
    MainPageComponent,
    RoomComponent,
    ServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
