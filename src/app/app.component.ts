import { Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  layoutServiceVisible : boolean = false

  constructor(private layoutService : LayoutService) {}

  ngOnInit() {
    this.layoutService.layoutSource$.subscribe((isVisible) => {
      this.layoutServiceVisible = isVisible
    })
  }
}
