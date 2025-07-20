import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone:true,
})
export class Signup {
  private fb = inject(FormBuilder);

signupForm = this.fb.group({
  name: [''],
  email: [''],
  password: [''],
  role: ['user']
});


  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.signup(this.signupForm.value).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
