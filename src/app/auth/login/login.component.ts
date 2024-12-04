import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        const role = response.role;
        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'enseignant') {
          this.router.navigate(['/enseignant-dash']);
        } else if (role === 'etudiant') {
          this.router.navigate(['/etudiant-dashboard']);
        }
      },
      (error) => {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    );
  }
}
