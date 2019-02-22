import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './home/splash/splash.component';
// import { DashboardComponent } from './home/dashboard/dashboard.component';
import { RegisterComponent } from './home/register/register.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: SplashComponent },
  {path: 'home', component: HomeComponent },
  // {path: 'dashboard', component: DashboardComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
