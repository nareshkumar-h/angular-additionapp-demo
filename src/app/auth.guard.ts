import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = localStorage.getItem('ISLOGGED_IN');
  console.log('AuthGuard', isLoggedIn);
  if (!isLoggedIn) {
    alert('Please login');
    window.location.href = '/home';
    return false;
  }
  return true;
};
