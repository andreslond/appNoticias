import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56f1a53575784211aecad19933a18012`);
  }
}
