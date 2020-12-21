import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BookingService {


    bookingUrl: string = environment.serverUrl + '/booking/createBooking';
    getAllBookingsUrl: string = environment.serverUrl + '/booking/viewBooking'

    constructor(private httpClient: HttpClient) {

    }

    createBooking(spot_id, booking_date, booking_time): Observable<any> {

        const body = {
            "spot_id": spot_id,
            "date": booking_date,
            "time": booking_time,
            "count": Math.floor(Math.random() * Math.floor(3)) + 1
        }
        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
        return this.httpClient.post(this.bookingUrl, body, { headers: reqheaders });
    }

    getUserBooking(): Observable<any> {
        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
        return this.httpClient.get<any>(this.getAllBookingsUrl, { headers: reqheaders })

    }
}