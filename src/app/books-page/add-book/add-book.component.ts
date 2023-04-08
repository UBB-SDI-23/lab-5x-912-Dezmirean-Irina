import { Component } from '@angular/core';
import { Author } from '../model/authorModel';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Router } from '@angular/router';
import { AddBookDto, Book } from '../model/bookModel';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent 
{

  authors: Author[] = [];
  books: Book[] = [];

  title?: string;
  genre?: string;
  country?: string;
  year?: string;
  auth?: Author;

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
    alert(this.title + " " + this.auth+" " +this.genre+" "+this.country+" "+this.year)
    if(this.title && this.genre && this.country && this.year && this.auth)
    {
      const book: AddBookDto = 
      {
          title: this.title,
          authorName: this.auth.firstName+" "+this.auth.lastName,
          genre: this.genre,
          country: this.country,
          year: this.year
      }
      this.apiService.addBook(book, this.auth.author_id).subscribe(
        (result: Book)=>
        {
          this.router.navigateByUrl('books');
        },
        (err) => {alert(err)}
      )
    }
  }

}

