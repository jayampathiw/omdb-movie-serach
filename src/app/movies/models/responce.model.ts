import { Movie } from "./movie.model";

export interface SearchResults {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
}
