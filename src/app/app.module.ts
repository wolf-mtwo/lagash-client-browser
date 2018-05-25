import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoService } from './service/product.service'
import { AppRoutingModule } from './app-routing.module';
import { BrowserRoutingModule } from './browser-2/routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';

import { HomeComponent } from './home/home.component';
import { BrowserComponent } from './browser/component';
import { Browser2Component } from './browser-2/component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserComponent,
    Browser2Component,
    CoursesListComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserRoutingModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
