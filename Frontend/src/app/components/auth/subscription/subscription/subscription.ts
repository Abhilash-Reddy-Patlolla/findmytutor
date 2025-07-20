import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  imports: [CommonModule],
  templateUrl: './subscription.html',
  styleUrl: './subscription.css'
})
export class Subscription implements OnInit {
  subscriptions: any[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const tutorId = localStorage.getItem('userId'); // get from login
    if (!tutorId) return;

    this.http.get<any[]>(`http://localhost:3000/api/subscriptions/${tutorId}`).subscribe({
      next: (data) => {
        this.subscriptions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}


