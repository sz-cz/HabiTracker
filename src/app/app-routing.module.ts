import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './overview/dashboard/dashboard.component';
import { HabitsListComponent } from './habits/habits-list/habits-list.component';
import { FormComponent } from './add-habit/form/form.component';
import { HabitDetailsComponent } from './habits/habit-details/habit-details.component';
import { ArchiveListComponent } from './archive/archive-list/archive-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: <any>DashboardComponent},
  { path: 'habits', component: <any>HabitsListComponent},
  { path: 'add-habit', component: <any>FormComponent},
  { path: 'archive', component: <any>ArchiveListComponent},
  { path: 'habits/:id', component: <any>HabitDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
