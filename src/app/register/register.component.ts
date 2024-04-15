import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

  export class RegisterComponent {
     username: string = '';
      email: string = '';
      password: string = '';

      constructor(private authService: ConnectionService, private router: Router) {}

      save(): void {
        this.authService.registerUser(this.username, this.password).subscribe(
          (resultData: any) => {
            console.log(resultData);
            alert("You are registered successfully");
            this.router.navigateByUrl('/login');
          },
          (error) => {
            console.error('Error:', error);
             alert("Something went wrong!");
          }
        );
      }
  }

