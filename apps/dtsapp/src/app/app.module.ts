import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
<<<<<<< HEAD
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
=======
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
>>>>>>> 2-materialStyle

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot(),
<<<<<<< HEAD
    MyMaterialModuleModule
=======
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
>>>>>>> 2-materialStyle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
