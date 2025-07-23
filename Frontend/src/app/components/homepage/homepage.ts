import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostalService } from '../../services/postal.service';
import { Tuition } from '../../models/tution.model';
import { TuitionService } from '../../services/tuition.service';
import {  map } from 'rxjs';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {
  ngOnInit(): void {
    
  }

  private  router = inject(Router);
  private  fb = inject(FormBuilder);
  private postalservice = inject(PostalService);
  private  tutionservice= inject(TuitionService);




  myform :FormGroup= this.fb.group({
    city:['',Validators.required],
    pincode:['',Validators.required],
    role:['',Validators.required],
  });

  tutionlist!:Tuition;
   pincode!:number;

getTutionListbyPincode() {
  this.tutionservice.getAllPosts().pipe(
    map(tuitions => tuitions.filter((t:any) => t.pincode === this.pincode))
  ).subscribe(filteredList => {
    this.tutionlist = filteredList;
    console.log(this.tutionlist);
  });
}


   findTutor(){
    this.pincode = this.myform.value.pincode;
   this.postalservice.getAddress(this.myform.value.pincode).subscribe({
  next:  (res) => {
    console.log('Address data:', res);
    
  },
  error: (err) => {
    console.error('Invalid Pincode or API error', err);
  }
});
  }
}
