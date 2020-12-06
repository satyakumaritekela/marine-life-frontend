import { RegisterService } from './../services/register.service';
import { BookingService } from './../services/booking.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BlogService } from 'src/services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { LoginService } from 'src/services/login.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SpotService } from 'src/services/spot.service';
import { MatMenuModule } from '@angular/material/menu';
import { SpotsComponent } from './spots/spots.component';
import { SingleSpotComponent } from './single-spot/single-spot.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { CreateSpotComponent } from './create-spot/create-spot.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    WriteBlogComponent,
    LandingPageComponent,
    SpotsComponent,
    SingleSpotComponent,
    MyBookingsComponent,
    CreateSpotComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCarouselModule,
    MatMenuModule
  ],
  providers: [BlogService, LoginService, AuthGuard, SpotService, BookingService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
