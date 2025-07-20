import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TuitionService {
  private api = 'http://localhost:3000/api/tuitions';

  constructor(private http: HttpClient) {}

  addTuition(data: any) {
    return this.http.post(this.api, data);
  }

  getTuitions() {
    return this.http.get(this.api);
  }
}
