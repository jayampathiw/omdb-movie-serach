import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieHttpService } from './services/movie-http.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  }
];

@NgModule({
  declarations: [
    BaseComponent,
    MovieDetailsComponent,
    MovieSearchComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [MovieHttpService],
})
export class MoviesModule {}
