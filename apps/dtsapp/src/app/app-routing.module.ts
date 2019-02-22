import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './home/splash/splash.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  {path: '', component: SplashComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
