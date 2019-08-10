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

  getRegister(token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' +  token
     });
     return this.http.get(this.rootUrl+ 'api/register', {headers: headers});
  }

  postAdmin(data:any){
    const headers = new HttpHeaders({  
      'Content-Type': 'application/json; charset=utf-8',
     });
    return this.http.post(this.rootUrl+ 'api/login',data, {headers: headers});
  }


  setAdmintoken(token: string) {
    localStorage.setItem('admin', token);
  }

  getAdminToken() {
    return localStorage.getItem('admin');
  }

  adminLoggedIn() {
    if (this.getAdminToken()) {
        return true;
    }
        return false;
  }

  removeAdminToken() {
    localStorage.removeItem('admin');
  }
}
