import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SplashComponent, DashboardComponent, AboutComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class HomeModule { }
