import { Component, OnInit } from '@angular/core';
import { Book } from './model/bookModel';
import { ApiServiceService } from '../services/api.service.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit
{
  books: Book[] = [];

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void 
  {
    this.apiService.getBooks().subscribe(
      (result: Book[]) => 
      {
        this.books = result;
      });
  }

  getInput(): void
  { 
      var year = (<HTMLInputElement>document.getElementById('year')).value;
      this.apiService.filterBooks(year).subscribe(
        (result: Book[]) =>
        {
        this.books = result;
        });
  }

}
