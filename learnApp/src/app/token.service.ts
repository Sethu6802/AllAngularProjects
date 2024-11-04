import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor(private http: HttpClient) {}

  sendTokenRequest(userName: string, password: string, role: string) : Observable<any>{
    let jsonRequestBody: any = {userName: userName, password: password, roles: role};
    let url = 'http://localhost:8234/authenticate';
    return this.http.post(url,jsonRequestBody, {responseType: 'text' as 'json'});
  }

  sendAuthRequest(token: string) : Observable<any>{
    console.log("Authenticating.....")
    const headers = new HttpHeaders().set('Authorization', "Bearer" + token);
    let url = 'http://localhost:8234/api1';
    return this.http.post(url, { headers, responseType: 'text' as 'json'});
  }


  callService(userName: string, password: string, role: string) {
    this.sendTokenRequest(userName,password,role).pipe(
      tap((response: any) => {
        console.log('')
        console.log("Authentication Response", response);
        const token = response;
        localStorage.setItem('token', response);
        return this.sendAuthRequest(token);
      })
    ).subscribe({
      next: (response: any) => {
        console.log("Login Success", response);
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
  
}