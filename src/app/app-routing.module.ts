import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './overview/dashboard/dashboard.component';
import { HabitsListComponent } from './habits/habits-list/habits-list.component';
import { FormComponent } from './add-habit/form/form.component';
import { HabitDetailsComponent } from './habits/habit-details/habit-details.component';
import { ArchiveListComponent } from './archive/archive-list/archive-list.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: <any>DashboardComponent, canActivate: [AuthGuard]},
  { path: 'habits', component: <any>HabitsListComponent, canActivate: [AuthGuard]},
  { path: 'add-habit', component: <any>FormComponent, canActivate: [AuthGuard]},
  { path: 'archive', component: <any>ArchiveListComponent, canActivate: [AuthGuard]},
  { path: 'habits/:id', component: <any>HabitDetailsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: <any>LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
