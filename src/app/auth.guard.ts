import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: ApiService,
    private router: Router) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }
    // this.router.navigate(['login']);
    return true;
  }






  //}
  //isLogin(routeurl: string) {
  //: if (this.apiService.isLoggedIn()) {
  //return true;
  //}
  //this.apiService.redirectUrl = routeurl;
  //this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
}


