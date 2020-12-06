import { BookingService } from './../../services/booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings:any;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getUserBooking().subscribe((data)=>{
      console.log(data)
      this.bookings=data
    })
  }

}
