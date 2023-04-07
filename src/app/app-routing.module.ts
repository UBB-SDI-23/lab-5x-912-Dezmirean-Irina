import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './books-page/details/details.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "books",
    component: BooksPageComponent,
  },
  {
    path: "authors",
    component: BooksPageComponent
  },
  {
    path: "publishers",
    component: BooksPageComponent
  },
  {
    path: "bookPublishers",
    component: BooksPageComponent
  },
  {
    path: "books/:book_id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
