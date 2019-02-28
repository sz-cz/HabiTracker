import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteBarComponent } from './site-bar/site-bar.component';
import { ScrollTopDirective } from './directives/scroll-top.directive';

@NgModule({
  exports: [SiteBarComponent, ScrollTopDirective],
  declarations: [SiteBarComponent, ScrollTopDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
