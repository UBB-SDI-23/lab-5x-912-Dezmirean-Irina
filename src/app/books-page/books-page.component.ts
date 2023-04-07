import { Component, OnInit } from '@angular/core';
import { Book } from './model/bookModel';
import { ApiServiceService } from '../services/api.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit
{
  books: Book[] = [];

  constructor(private apiService: ApiServiceService, private router: Router){}

  ngOnInit(): void 
  {
    this.apiService.getBooks().subscribe(
      (result: Book[]) => 
      {
        this.books = result.sort();
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

  showDetails(bookId: string)
  {
    console.log(bookId);
    this.router.navigateByUrl(`books/${bookId}`);
  }

  goToAdd()
  {
    this.router.navigateByUrl(`books.add`);
  }

  sortByName()
  {
    this.books = this.books.sort(function(a,b) {return (Number)(a.year) - (Number)(b.year);});
  }

  sortByNameReversed()
  {
  
    this.books = this.books.sort(function(a,b) {return (Number)(b.year) - (Number)(a.year);});
      
  }

}
