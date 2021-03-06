import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OverviewModule } from './overview/overview.module';
import { HabitsModule } from './habits/habits.module';
// import { StatsModule } from './stats/stats.module';
import { AddHabitModule } from './add-habit/add-habit.module';
import { HabitsService } from './habits.service';
import { ArchiveModule } from './archive/archive.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LayoutService } from './layout.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OverviewModule,
    HabitsModule,
    // StatsModule,
    AddHabitModule,
    ArchiveModule,
    LoginModule
  ],
  providers: [HabitsService, AuthService, AuthGuard, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
