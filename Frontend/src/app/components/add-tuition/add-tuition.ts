import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuitionService } from '../../services/tuition.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-tuition',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-tuition.html',
  styleUrl: './add-tuition.css',
  standalone:true
})
export class AddTuition {
    private fb = inject(FormBuilder);
  private ts = inject(TuitionService);
  private router = inject(Router);

  isSubmitting = false;

 postForm:FormGroup = this.fb.group({
      subject: ['', Validators.required],
      classLevel: ['', Validators.required],
      location: ['', Validators.required],
      pincode: ['', Validators.required],
      description: ['', Validators.required],
      schedule: ['']  // Optional field
    });

  onSubmit(){
    if(this.postForm.valid){

      this.isSubmitting = true;
      this.ts.createPost(this.postForm.value).subscribe({
        next:()=>{
          alert("posted sucessfully");
          this.router.navigate(['/']);
        },
        error: (err)=>console.log('Post Failed', err)
        
      })
    }
  }
}
