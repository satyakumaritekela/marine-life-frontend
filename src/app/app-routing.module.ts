import { VendorGuard } from './auth/vendor.guard';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { SingleSpotComponent } from './single-spot/single-spot.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpotsComponent } from './spots/spots.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'spot/:id', component: SingleSpotComponent },
  { path: '', component: LandingPageComponent },
  { path: 'feed', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'mybookings', component: MyBookingsComponent, canActivate: [AuthGuard] },
  { path: 'spots', component: SpotsComponent },
  { path: 'write-blog', component: WriteBlogComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
