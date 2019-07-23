import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  readonly rootUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  postRegister(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     });
    return this.http.post(this.rootUrl+ 'api/register',data, {headers: headers});
  }
}
