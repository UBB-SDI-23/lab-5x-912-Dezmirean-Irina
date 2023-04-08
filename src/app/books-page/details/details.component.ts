import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Book } from '../model/bookModel';
import { BookDetailed } from "../model/bookModel";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit
{
  bookId?: string;
  bookDetailed?: BookDetailed;

  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params =>
      {
        this.bookId = params['book_id'];
        this.apiService.getBookById(this.bookId!).subscribe((book: BookDetailed) =>
        {
          this.bookDetailed = book;
        })
      });
  }

  goToEditBook(bookId: string)
  {

    this.router.navigateByUrl(`books/edit/${bookId}`);
  }


}
