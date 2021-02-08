import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { SearchResults } from '../../models/responce.model';

import { MovieHttpService } from '../../services/movie-http.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  movieSubscription: Subscription;

  selectedMovieSubscription: Subscription;

  movies: Observable<SearchResults> ;

  selectedMovie: Observable<Movie>;

  constructor(private movieService: MovieHttpService) { }

  ngOnInit(): void {
  }

  movieSearch(searchText: string): void {
    this.movies = this.movieService.findMovie(searchText)
  }

  searchByIMDB(imdb: string): void {
    this.selectedMovie = this.movieService.findMoviesByIMDB(imdb)
  }

}
