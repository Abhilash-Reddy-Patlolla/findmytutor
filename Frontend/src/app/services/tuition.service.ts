import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TuitionService {
  private api = 'http://localhost:3000/api/tuitions';

  constructor(private http: HttpClient) {}

  addTuition(data: any) {
    return this.http.post(this.api, data);
  }

  getAllPosts():Observable<any> {
    return this.http.get(this.api);
  }

  createPost(data:any){
    return this.http.post(`${this.api}`,data);
  }
}
