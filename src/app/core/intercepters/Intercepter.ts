
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
 
  constructor() {}
 
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Intercepter');
//     const token = "mytoken";
//     const headers = new HttpHeaders()
//         .set('access-token', token)
//         .set('Authorization', 'Bearer' + token);
//     const AuthRequest = request.clone({ headers: headers});
//     return next.handle(AuthRequest);
//   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor');
    // Lấy token từ local storage
    const token = localStorage.getItem('loginToken') || '';
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    const AuthRequest = request.clone({ headers });
    return next.handle(AuthRequest);
  }
}