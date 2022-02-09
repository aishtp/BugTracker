import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/Router';
import { AuthenticatorService } from '../Services/authenticator.service';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
     *
     */
    constructor(private authenticatorService: AuthenticatorService, private router: Router) {


    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        try {

            let authenticated: Boolean = this.authenticatorService.IsAuthenticated();
            if (authenticated) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }


        } catch (error) {
            return false;
        }
    }
}