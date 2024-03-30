import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('loginToken'); 

    if (state.url.includes('home') && !token) {
      console.log("Không thể vào trang này mà không đăng nhập");
      this.router.navigate(['/login']); 
      return false;
    }
    if (token) {
      console.log("Đã kiểm duyệt vào trang");
      return true;
    } else {
      console.log("Không có quyền truy cập, vui lòng đăng nhập");
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
