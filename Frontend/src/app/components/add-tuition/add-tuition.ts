import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TuitionService } from '../../services/tuition.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-tuition',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-tuition.html',
  styleUrl: './add-tuition.css'
})
export class AddTuition {
    tuition = {
    subject: '',
    location: '',
    schedule: '',
    description: ''
  };

  constructor(private tuitionService: TuitionService, private router: Router,private toast: ToastService) {}

submitTuition() {
  this.tuitionService.addTuition(this.tuition).subscribe({
    next: () => {
      this.toast.showMessage("Tuition posted successfully!");
      this.router.navigate(['/']);
    },
    error: () => {
      this.toast.showMessage("Something went wrong.");
    }
  });
}


}
