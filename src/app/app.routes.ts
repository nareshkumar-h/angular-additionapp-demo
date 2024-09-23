import { Routes } from '@angular/router';
import { AdditionComponent } from './calculator/addition/addition.component';
import { CartComponent } from './calculator/cart/cart.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/addition', pathMatch: 'full' }
];
