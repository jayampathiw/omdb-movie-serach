import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { SearchResults } from '../../models/responce.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnChanges {

  @Input() movies: Array<Movie>

  @Input() selectedMovie: Movie;

  @Output() selectedImdbEmmiter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedMovie && changes.selectedMovie.currentValue && this.movies){
      this.movies = this.movies.map(movie =>
        movie.imdbID == changes.selectedMovie.currentValue.imdbID ?
          changes.selectedMovie.currentValue : movie
      )
    }
  }

  ngOnInit(): void {
  }

  setSelectedMovie(imdb: string): void{
    this.selectedImdbEmmiter.emit(imdb);
  }

}
