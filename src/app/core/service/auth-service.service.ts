import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/Auth/User';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Register } from '../model/Auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private UrlLogin = "http://10.20.78.53:8000/api/login";
  private UrlRegister = "http://10.20.78.53:8000/api/register";
  // private apiConfig = {
  //   headers: this.createHeaders(),
  // }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  // private createHeaders(): HttpHeaders{
  //   return new HttpHeaders({'Content-Type': 'application/json'});
  // }

  //Đăng nhập
  onLogin(user: { username: string; password: string }): Observable<any> {
    return this.http.post(this.UrlLogin, user, ).pipe(
      catchError(error => {
        return throwError(() => new Error(error.error.message || 'Có lỗi xảy ra từ server'));
      })
    );
  }

  //Đăng kí 
  onRegister(Register: { username: string; password: string; phone: String; 
                         last_name: String; first_name: String; email: String; password_confirmation: String}): Observable<any> {
    return this.http.post(this.UrlRegister, Register).pipe(
      catchError(error => {
        return throwError(() => new Error(error.error.message || 'Có lỗi xảy ra từ server'));
      })
    );
  }

}
