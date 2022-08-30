import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Registrando o form como um FormGroup com seus controles
  registerForm = new FormGroup({
    // 'name' é um input que vai receber validações dentro do FormControl, assim como 'email' e 'password'
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {}
}
