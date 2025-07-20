import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone:true,
})
export class Signup {
  form = {
    email: '',
    password: '',
    role: 'student'
  };

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    this.auth.signup(this.form).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
