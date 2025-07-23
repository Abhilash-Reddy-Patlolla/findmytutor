import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class PostalService {

    private http = inject(HttpClient);


    getAddress(pincode: string): Observable<any> {
  return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`);
}


}