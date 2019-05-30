import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }
  addMovies(name, link, author) {
    this._movieService.addMovies(name, link, author);
  }
}
