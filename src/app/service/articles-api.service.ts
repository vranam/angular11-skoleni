import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_ARTICLES = 'https://angular-skoleni-api.herokuapp.com/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {

  constructor(
    private httpClientService: HttpClient,
  ) { }

  getArticles(): Observable<Article[]> {
    return this.httpClientService.get<Article[]>(URL_ARTICLES);
  }
}

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  created: Date;
}
