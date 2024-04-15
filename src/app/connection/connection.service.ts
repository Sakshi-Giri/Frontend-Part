import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

 constructor(private http: HttpClient) {}

 registerUser(username: string, password: string): Observable<any> {
    const bodyData = { username, password };
    return this.http.post("http://localhost:5000/register", bodyData);
  }

  login(username: string, password: string): Observable<any> {
    const bodyData = { username, password };
    return this.http.post("http://localhost:5000/login", bodyData);
  }
  
//  below service for java
//  registerUser(username: string, email: string, password: string): Observable<any> {
//     const bodyData = { username, email, password };
//     return this.http.post("http://localhost:8085/api/save", bodyData, { responseType: 'text' });
//   }
//   login(email: string, password: string): Observable<any> {
//     let bodyData = { email: email, password: password };
//     return this.http.post("http://localhost:8085/api/login", bodyData);
//   }

  downloadVideo(videoUrl: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:8085/api/videos/extract-audio', { url: videoUrl }, { headers, responseType: 'blob' });
  }

}
