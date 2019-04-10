import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layoutSource$ = new Subject<boolean>()

  hideLayout() : void {
    this.layoutSource$.next(true);
  }

  
  showLayout() : void {
    this.layoutSource$.next(false);
  }

}
