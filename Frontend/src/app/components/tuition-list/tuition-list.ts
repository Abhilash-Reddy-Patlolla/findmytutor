import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TuitionService } from '../../services/tuition.service';
import { FilterTuitionsPipe } from '../../pipes/filter-tutions.pipe';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tuition-list',
  imports: [CommonModule, FormsModule, FilterTuitionsPipe],
  templateUrl: './tuition-list.html',
  styleUrl: './tuition-list.css',
})
export class TuitionList implements OnInit {
  private auth = inject(AuthService);
  private http = inject(HttpClient);
  isLoading = true;
  userRole: string | null = '';

  search = '';

  tuitions = [
    {
      subject: '',
      location: '',
      schedule: '',
      description: '',
    },
  ];

  ngOnInit() {
    this.userRole = this.auth.getRole();
    this.tuitionService.getAllPosts().subscribe({
      next: (data: any) => {
        this.tuitions = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  constructor(private tuitionService: TuitionService, private router: Router) {}

  submitTuition() {
    this.tuitionService.addTuition(this.tuitions).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  subscribe(tuitionId: string) {
    const tutorId = localStorage.getItem('userId'); // or from your auth service
    this.http
      .post('http://localhost:3000/api/subscriptions', { tutorId, tuitionId })
      .subscribe({
        next: () => alert('Subscribed successfully!'),
        error: (err) => alert(err.error.message || 'Subscription failed.'),
      });
  }
}
