import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Author } from '../model/authorModel';
import { AddBookDto, Book } from '../model/bookModel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent 
{
  authors: Author[] = [];
  book?: AddBookDto;

  bookId: string =''
  title: string=''
  genre: string=''
  country: string=''
  year: string=''
  authorName: string=''
  auth?: Author;

  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void 
  {

      this.apiService.getAuthors().subscribe(
        (result: Author[]) => 
        {
          this.authors = result.sort();
        });

        this.activatedRoute.params.subscribe(params =>
          {
            this.bookId = params['bookId'];
            this.apiService.getBookById(this.bookId!).subscribe((book: AddBookDto) =>
            {
              this.book = book;
              this.title = this.book.title;
              this.genre = this.book.genre;
              this.country = this.book.country;
              this.year = this.book.year;
              this.authorName = this.book.authorName;
              // document.getElementById('title')?.setAttribute("placeholder",this.title);
              // document.getElementById('genre')?.setAttribute("placeholder",this.genre);
              // document.getElementById('country')?.setAttribute("placeholder",this.country);
              // document.getElementById('year')?.setAttribute("placeholder",this.year);
            })
          });
  }

  editBook()
  {
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
      this.apiService.editBook(book, this.bookId!).subscribe(
        (result: AddBookDto)=>
        {
          alert("The book has been modified!")
          this.router.navigateByUrl('books');
        }
      )
    }
  }





}
