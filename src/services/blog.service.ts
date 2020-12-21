import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/models/blog.model';

@Injectable()
export class BlogService {


    url: string = environment.serverUrl + '/blog/getAllBlogs';

    constructor(private httpClient: HttpClient) {

    }

    getAllBlogs(): Observable<Blog> {

        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
        return this.httpClient.get<Blog>(this.url, { headers: reqheaders });
    }



    postBlog(title, description): Observable<any> {

        var reqheaders = new HttpHeaders().set("Authorization", 'Bearer ' + sessionStorage.getItem('token'));

        const body = {
            "title": title,
            "description": description
        };
        return this.httpClient.post<any>(environment.serverUrl + '/blog/createBlog', body, { headers: reqheaders });
    }


}