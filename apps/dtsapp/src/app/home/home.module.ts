import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// MicroService
import { MessageModule } from '@dtsapp/message/src/lib/message.module';
import { MessageService } from '@dtsapp/message/src/lib/message.service';





@NgModule({
  declarations: [SplashComponent, AboutComponent, NavbarComponent, RegisterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    MessageModule
  ],
  providers: [ MessageService ]
})
export class HomeModule { }
