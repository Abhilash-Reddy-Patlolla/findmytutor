import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true,
})
export class App {
  protected readonly title = signal('Frontend');
  auth = inject(AuthService);
  role: string | null = null;

  constructor() {
    this.role = this.auth.getRole();
    console.log(this.role);
    
  }



}
