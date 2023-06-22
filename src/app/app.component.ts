import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comics: any[] = [];
  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
    this.marvelService.getComics().subscribe(
      response => {
        this.comics = response.data.results;
        console.log(this.comics)
      },
      error => {
        console.error('Error al obtener los cómics:', error);
      }
    );
  }
  redirectToComicDetails(id: number): void {
    this.router.navigate(['/comic', id.toString()]);
  }
}
