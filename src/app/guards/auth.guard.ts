import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService:UserService,
        private router:Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ){
            if (!this.userService.token) {
                return this.router.navigateByUrl('auth/login')
            }
            return this.userService.validateToken()
                .pipe(
                    tap(isAuthenticated => {
                        if (!isAuthenticated) {
                            this.router.navigateByUrl('auth/login')
                        }
                    })
            )
        }
}
