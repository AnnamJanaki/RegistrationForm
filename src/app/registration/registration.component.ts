import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  model: any = {};

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:8086/api/signupuser', this.model).subscribe(response => {
      console.log('Registration successful');
    }, error => {
      console.log('Registration failed');
    });
  }
}
