import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Microservices
import { MessageModule } from '@dtsapp/message/src/lib/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
