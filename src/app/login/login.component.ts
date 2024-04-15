
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

 email: string = '';
  password: string = '';

  constructor(private authService: ConnectionService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (resultData: any) => {
        console.log(resultData);

        if (resultData.message == "Email not exists") {
          alert("Email not exists");
        } else if (resultData.message == "Login Success") {
          this.router.navigateByUrl('/home');
        } else {
          alert("Incorrect Email and Password not match");
        }
      },
      (error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

}
