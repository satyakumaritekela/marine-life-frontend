import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {


    url: string = environment.serverUrl + '/user/register';

    constructor(private httpClient: HttpClient) {

    }

    registerUser(name, email, password): Observable<any> {

        const body = {
            "fullname":name,
            "email": email,
            "password": password,
            "type":"guest"
        }
        return this.httpClient.post(this.url, body);
    }
}