import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {


    url: string = environment.serverUrl + '/user/login';
    logourUrl:string=environment.serverUrl+'/user/logout'

    constructor(private httpClient: HttpClient) {

    }

    login(email, password): Observable<any> {

        const body = {
            "email": email,
            "password": password
        }
        return this.httpClient.post(this.url, body);
    }

    logout():Observable<any>{ 
        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + localStorage.getItem('token'));
        return this.httpClient.post(this.logourUrl,null, { headers: reqheaders });
    }
}