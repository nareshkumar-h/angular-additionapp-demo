import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  login() {
    localStorage.setItem('ISLOGGED_IN', "true");
    console.log('Login Successfull');
  }

  logout() {
    localStorage.clear();
  }
}
