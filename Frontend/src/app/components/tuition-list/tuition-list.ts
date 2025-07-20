import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TuitionService } from '../../services/tuition.service';
import { FilterTuitionsPipe } from '../../pipes/filter-tutions.pipe';

@Component({
  selector: 'app-tuition-list',
  imports: [CommonModule, FormsModule,FilterTuitionsPipe],
  templateUrl: './tuition-list.html',
  styleUrl: './tuition-list.css',
})
export class TuitionList implements OnInit {
  isLoading = true;

  search = '';


  tuitions = [{
    subject: '',
    location: '',
    schedule: '',
    description: '',
  }];

  ngOnInit() {
    this.tuitionService.getTuitions().subscribe({
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
}
