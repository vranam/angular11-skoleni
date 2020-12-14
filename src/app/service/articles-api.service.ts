import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const URL_ARTICLES = 'https://angular-skoleni-api.herokuapp.com/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {

  constructor(
    private httpClientService: HttpClient,
    private authService: AuthService,
  ) { }

  getArticles(): Observable<Article[]> {
    return this.httpClientService.get<Article[]>(URL_ARTICLES);
  }

  addArticle(request: CreateArticleRequest): Observable<Article> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('sid', this.authService.sessionId);
    return this.httpClientService.post<Article>(URL_ARTICLES, request, {headers});
  }
}

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  created: Date;
}

export interface CreateArticleRequest {
  title: string;
  content: string;
}
