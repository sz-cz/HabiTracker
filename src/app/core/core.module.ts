import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuBarComponent, FooterComponent],
  exports: [MenuBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
