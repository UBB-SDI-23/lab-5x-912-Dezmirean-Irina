import { Author } from "./authorModel";

export interface Book
{
    book_id: string;
    title: string;
    authorName: string;
    genre: string;
    country: string;
    year: string;
}

export interface BookDetailed
{
    book_id: string;
    title:string;
    authorName: string;
    genre: string;
    country: string;
    year: string;
    author: Author;
}

export interface AddBookDto
{
    title: string;
    authorName: string;
    genre: string;
    country: string;
    year: string;
}