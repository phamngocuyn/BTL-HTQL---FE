import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/Auth/User';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private UrlLogin = "10.20.165.162:8000/api/login";
  private apiConfig = {
    headers: this.createHeaders(),
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  private createHeaders(): HttpHeaders{
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  onLogin(user: { username: string; password: string }): Observable<any> {
    return this.http.post(this.UrlLogin, user,this.apiConfig)
  }

}
