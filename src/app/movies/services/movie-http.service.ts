import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

import { SearchResults } from '../models/responce.model';

@Injectable()
export class MovieHttpService {

  private readonly baseUrl = 'http://www.omdbapi.com/';
  private readonly apiKey = '632a0f74';

  constructor(private http: HttpClient) { }

  findMovie(title: string): Observable<SearchResults> {
    const url = `${this.baseUrl}?s=${title}&apikey=${this.apiKey}`;
    return this.http.get<SearchResults>(url);
  }

  findMoviesByIMDB(imdb: string): Observable<Movie> {
    const url = `${this.baseUrl}?i=${imdb}&apikey=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }
}
