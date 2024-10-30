import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {  }

  sendTokenRequest(userName: string, password: string, role: string) : Observable<any>{
    let jsonRequestBody: any = {user_name: userName, password: password, roles: role};
    let url = 'http://localhost:8234/authenticate';
    return this.http.post(url,jsonRequestBody, {responseType: 'text' as 'json'});
  }

  sendAuthRequest(token: string) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', "Bearer" + token);
    let url = 'http://localhost:8234/api1';
    return this.http.post(url, { headers, responseType: 'text' as 'json'});
  }
}
