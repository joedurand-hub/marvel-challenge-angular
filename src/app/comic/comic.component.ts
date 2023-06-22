import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comic: any;

  constructor(private route: ActivatedRoute, private marvelService: MarvelService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const comicId = parseInt(id!, 10);

    this.marvelService.getComicById(comicId).subscribe(
      response => {
        console.log(response)
        // this.comic = response.data.results[0];
      },
      error => {
        console.error('Error al obtener los detalles del cómic:', error);
      }
    );
  }
}