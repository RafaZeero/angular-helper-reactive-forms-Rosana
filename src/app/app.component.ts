import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Para quando o formulário for enviado!
  isFormSend: boolean = false;

  // Registrando o form como um FormGroup com seus controles
  registerForm = new FormGroup({
    // 'name' é um input que vai receber validações dentro do FormControl, assim como 'email' e 'password'
    name: new FormControl(
      'Valor inicial de um campo coloca aqui, sugiro deixar em branco',
      // Validação para os campos do formulário devem ser colocados em Array ou em um objeto como mostrarei nos exemplos a seguir
      [Validators.minLength(3), Validators.pattern(/^[a-z0-9]+$/)]
    ),
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(8), Validators.maxLength(20)],
    }),
  });
  constructor() {}

  onSubmit() {
    // Desestruturando validações do registerForm
    const { name, email, password } = this.registerForm.value;
    // Mostrando as validações no console
    console.log({ name, email, password, form: this.registerForm });

    // Mostrar envio do form!
    this.isFormSend = true;

    // Somente para resetar o envio do form já que nada mais aconterá no projeto
    setTimeout(() => {
      this.isFormSend = false;
    }, 5 * 1000);
  }
}
