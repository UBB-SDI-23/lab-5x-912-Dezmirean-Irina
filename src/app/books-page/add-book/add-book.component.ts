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
  author_id?: string;
  author_name?: string;
  genre?: string;
  country?: string;
  year?: string;


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

  setSelectedAuthorId(authorId: string, fName: string, lName: string)
  {
    alert("In set author function with id"+authorId+fName+lName)
    this.author_id = authorId;
    this.author_name = fName + " "+ lName;
  }

  addBook()
  {
    alert("in addBook() function" + this.title + this.author_id + this.author_name+this.genre+this.country+this.year)
    if(this.title && this.genre && this.country && this.year && this.author_name && this.author_id)
    {
      const book: AddBookDto = 
      {
          title: this.title,
          authorName: this.author_name,
          genre: this.genre,
          country: this.country,
          year: this.year
      }
      this.apiService.addBook(book, this.author_id).subscribe(
        (result: Book)=>
        {
          this.router.navigateByUrl('books');
        },
        (err) => {alert(err)}
      )
    }
  }

}

