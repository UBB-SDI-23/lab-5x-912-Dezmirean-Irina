import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books-page/model/bookModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>
  {
    return this.http.get('http://ec2-13-51-250-53.eu-north-1.compute.amazonaws.com/books') as Observable<Book[]>;
  }

  filterBooks(year:String): Observable<Book[]>
  {
    return this.http.get(`http://ec2-13-51-250-53.eu-north-1.compute.amazonaws.com/book/filter/${year}`) as Observable<Book[]>;
  }
}
