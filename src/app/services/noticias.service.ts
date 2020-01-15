import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../Interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLineNumber = 0;

  categoriaActual = '';
  paginaActual = 0;

  constructor(
    private http: HttpClient
  ) { }

  getTopHeadlines() {
    this.headLineNumber++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.headLineNumber}`);
  }

  getTopHeadLinesCategoria(categoria: string) {

    if (categoria === this.categoriaActual) {
      this.paginaActual++;
    } else {
      this.categoriaActual = categoria;
      this.paginaActual = 1;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.paginaActual}`);
  }

  ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }
}
