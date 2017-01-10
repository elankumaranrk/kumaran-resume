import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {KumaranResumeModule} from './kumaran-resume/kumaran-resume.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KumaranResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
