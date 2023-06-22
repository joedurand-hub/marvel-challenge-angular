import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  constructor(private http: HttpClient) { }

  getComics(): Observable<any> {
    const apiUrl = 'http://gateway.marvel.com/v1/public/comics?limit=100&offset=150&ts=1&apikey=3a6e11fea456ed169451605d221b6cb2&hash=c5ba593bf5555830db20d78e57bc7677';

    return this.http.get<any>(apiUrl);
  }

  getComicById(id: number): Observable<any> {
    const apiUrl = `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=3a6e11fea456ed169451605d221b6cb2&hash=c5ba593bf5555830db20d78e57bc7677`;
    return this.http.get<any>(apiUrl);
  }
}