import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private auth: ApiService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.isLoggedIn()) {
      let user = this.auth.getToken();
      const role = user.ROLE
      if (role == 'admin') {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
    this.router.navigate(['login']);
    return false;
  }




}

