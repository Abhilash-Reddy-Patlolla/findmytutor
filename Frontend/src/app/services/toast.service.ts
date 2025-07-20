import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  showMessage(msg: string) {
    alert(msg); // simple fallback
  }
}
