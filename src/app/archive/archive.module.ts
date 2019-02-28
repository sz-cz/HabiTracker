import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [ArchiveListComponent],
  declarations: [ArchiveListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ArchiveModule { }
