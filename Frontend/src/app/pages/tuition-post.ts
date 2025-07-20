import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuitionService } from '../services/tuition.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tuition-post',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './tuition-post.html',
  styleUrl: './tuition-post.css',
  standalone:true
})
export class TuitionPost implements OnInit{
  ngOnInit(): void {
      console.log("I am in tution-post compoent");

  }

  
  private fb = inject(FormBuilder);
  private ts = inject(TuitionService);
  private router = inject(Router);

  postForm = this.fb.group({
    subject : ['',Validators.required],
    classLevel : ['',Validators.required],
     location: ['', Validators.required],
    description: ['']
  });

  onSubmit(){
    if(this.postForm.valid){
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
