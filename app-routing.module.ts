import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { ServiceComponent } from './serv/service.component'




  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    {path:'',component:MainPageComponent},
    {path:'booking',component:BookingComponent},
    {path:'room',component:RoomComponent},
    {path:'service',component:ServiceComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

  


