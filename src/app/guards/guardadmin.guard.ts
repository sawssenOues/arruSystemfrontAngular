import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmittersService } from '../services/admin/emitters.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  authenticated: any; // Define the authenticated property

  constructor(private router: Router, private emittersService: EmittersService) {
    // Subscribe to the authEmitter outside of the canActivate function
    EmittersService.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticated == true) { // Check the authenticated property
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}

