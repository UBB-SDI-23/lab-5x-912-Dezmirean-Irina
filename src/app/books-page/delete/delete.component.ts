import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { BookDetailed } from '../model/bookModel';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent 
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

  deleteBook()
  {
     this.apiService.deleteBook(this.bookId!);
     alert("The book has been removed from the list!");
     this.router.navigateByUrl('books');
  }

  cancelDeleteBook()
  {
    alert("The book has NOT been removed from the list!");
    this.router.navigateByUrl('books');
  }

}
