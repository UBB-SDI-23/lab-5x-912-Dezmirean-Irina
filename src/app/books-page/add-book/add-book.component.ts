import { Component } from '@angular/core';
import { Author } from '../model/authorModel';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Router } from '@angular/router';
import { Book } from '../model/bookModel';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent 
{

  authors: Author[] = [];
  books: Book[] = [];


  constructor(private apiService: ApiServiceService, private router: Router){}

  ngOnInit(): void 
  {
    this.apiService.getBooks().subscribe(
      (result: Book[]) => 
      {
        this.books = result.sort();
      });

      this.apiService.getAuthors().subscribe(
        (result: Author[]) => 
        {
          this.authors = result.sort();
        });
  }

  addBook()
  {

  }


}
