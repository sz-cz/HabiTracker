import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteBarComponent } from './site-bar/site-bar.component';

@NgModule({
  exports: [SiteBarComponent],
  declarations: [SiteBarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
