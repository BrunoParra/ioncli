import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private refreshSubject = new Subject<void>();

  constructor() { }
  
  refresh() {
    this.refreshSubject.next();
  }

  getRefreshObservable() {
    return this.refreshSubject.asObservable();
  }
}
