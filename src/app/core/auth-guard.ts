import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = false;

  if (isLoggedIn) {
    return true;
  }

  // redirect if not logged in
  return router.createUrlTree(['/admin']);
};
