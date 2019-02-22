import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';




@NgModule({
  declarations: [SplashComponent, AboutComponent, NavbarComponent, RegisterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ]
})
export class HomeModule { }
