import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { debounceTime, map, distinctUntilChanged, filter} from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Output() movieSearch: EventEmitter<string> = new EventEmitter();

  @ViewChild('searchText', { static: true }) searchText: ElementRef;

  constructor() { }

  ngOnInit(): void {
    fromEvent(this.searchText.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      filter(res => res.length > 3),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.movieSearch.emit(text);
    });
  }

  search(){
    if(this.searchText){
      this.movieSearch.emit(this.searchText.nativeElement.value);
    }
  }

}
