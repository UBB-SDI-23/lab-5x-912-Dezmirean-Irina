import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './books-page/details/details.component';
import { AddBookComponent } from './books-page/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    HomePageComponent,
    DetailsComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
