import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books-page/model/bookModel';


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

  getBookById(id: string): Observable<Book>
  {
    return this.http.get(`${this.baseURL}/books/${id}`) as Observable<Book>;
  }
}
