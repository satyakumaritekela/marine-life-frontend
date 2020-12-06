import { BookingService } from './../../services/booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpotService } from 'src/services/spot.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-spot',
  templateUrl: './single-spot.component.html',
  styleUrls: ['./single-spot.component.css']
})
export class SingleSpotComponent implements OnInit {

  spot: any;
  booking_date: Date;
  booking_time: any;
  spot_id: any;

  constructor(private spotService: SpotService,
    private bookingService: BookingService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.spot_id = this.activatedroute.snapshot.paramMap.get("id");
    this.spotService.getOneSpot(this.spot_id).subscribe((data) => {
      this.spot = data;
    })
  }

  onTimeSelect(time) {
    this.booking_time = time
  }

  bookSlot() {

    if (this.booking_time || this.booking_date) {

      this.bookingService.createBooking(this.spot_id,this.booking_date,this.booking_time).subscribe((data)=>{
        console.log(data)
      })

      this.snackBar.open('Booking Confirmed', '', {
        duration: 2000
      })
      this.router.navigate(['mybooking'])

    } else {
      this.snackBar.open('Please Select time and date', '', {
        duration: 2000
      })
    }

  }

}
