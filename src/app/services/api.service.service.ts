import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookDetailed } from '../books-page/model/bookModel';
import { Author } from '../books-page/model/authorModel';


@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  baseURL = '/api';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>
  {
    return this.http.get(`${this.baseURL}/books`) as Observable<Book[]>;
  }

  filterBooks(year:String): Observable<Book[]>
  {
    return this.http.get(`${this.baseURL}/book/filter/${year}`) as Observable<Book[]>;
  }

  getBookById(bookId: string): Observable<BookDetailed>
  {
    return this.http.get(`${this.baseURL}/book/${bookId}`) as Observable<BookDetailed>;
  }

  getAuthors(): Observable<Author[]>
  {
    return this.http.get(`${this.baseURL}/authors`) as Observable<Author[]>;
  }
}
