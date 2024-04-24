import { Component } from '@angular/core';
import { UsersService } from '../../Services/UsersService';
import { RegisterRequest } from '../../Models/RegisterRequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registerRequest: RegisterRequest = new RegisterRequest();
  constructor(private UsersService: UsersService) { }

  registerUser(): void {
    this.UsersService.Register(this.registerRequest).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }
}
