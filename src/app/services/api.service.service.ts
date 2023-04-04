import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books-page/model/bookModel';


@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  baseURL = 'http://ec2-16-16-99-246.eu-north-1.compute.amazonaws.com/api';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>
  {
    return this.http.get(`${this.baseURL}/books`) as Observable<Book[]>;
  }

  filterBooks(year:String): Observable<Book[]>
  {
    return this.http.get(`${this.baseURL}/book/filter/${year}`) as Observable<Book[]>;
  }
}
