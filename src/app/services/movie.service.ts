import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    new Movie(1, 'Lạc Trôi', 'https://www.youtube.com/watch?v=Llw9Q6akRo4', 'Sơn Tùng MTP'),
    new Movie(2, 'Nơi Này Có Anh', 'https://www.youtube.com/watch?v=FN7ALfpGxiI', 'Sơn Tùng MTP')
  ];
  constructor() { }

  getAllMovies() {
    return this.movies;
  }

  addMovies(name, link, author) {
    if (name && link && author) {
    const movie = new Movie(null , name, link, author);
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie);
    }
  }

  getLastId(movies) {
    const lastId = movies.length > 0 ? movies.sort((a, b) => {
      if ( a.id > b.id ) {
        return -1;
      } else if ( a.id < b.id ) {
        return 1;
      } else {
        return 0;
      }
    })[0].id + 1 : 1 ;
    console.log(movies);
    return lastId;
  }

  removeMovies(movieId) {
    const indexRemove = this.movies.findIndex((movie) => movie.id === movieId);
    this.movies.splice(indexRemove, 1);
  }
}
