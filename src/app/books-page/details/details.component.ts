import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Book } from '../model/bookModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit
{
  bookId?: string;
  book?: Book;
  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params =>
      {
        this.bookId = params['book_id'];
        this.apiService.getBookById(this.bookId!).subscribe((book: Book) =>
        {
          this.book = book;
        })
      });
  }

}
