import { BookingService } from './../../services/booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings:any;
  length: number;
  constructor(private bookingService: BookingService) {
    this.loadBookings();
   }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(){
    this.bookingService.getUserBooking().subscribe((data)=>{
      this.length=data.length
      this.bookings=data
    })
  }

}
