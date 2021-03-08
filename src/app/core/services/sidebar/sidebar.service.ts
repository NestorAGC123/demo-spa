import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private toggled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  getToggled(){
    return this.toggled$.asObservable();
  }

  toggle(){
    this.toggled$.next(!this.toggled$.value);
  }
}
