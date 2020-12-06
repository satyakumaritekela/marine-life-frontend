import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SpotService {


    url: string = environment.serverUrl + '/spot/getAllSpots';
    getSingleSpotUrl: string=environment.serverUrl+'/spot/getSpot/';

    constructor(private httpClient: HttpClient) {

    }

    getAllSpots(): Observable<any> {

        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + localStorage.getItem('token'));
        return this.httpClient.get<any>(this.url, { headers: reqheaders });
    }

    getOneSpot(id):Observable<any>{
        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + localStorage.getItem('token'));
        return this.httpClient.get<any>(this.getSingleSpotUrl+id, { headers: reqheaders });
    }
}