import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn =( 
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) =>  {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token =  authService.checkDBuser()
  if(token) {
    console.log('token ===>' + token)
    return true;
  } else {
    router.navigate(['/signin']);
    return false;
  }
}