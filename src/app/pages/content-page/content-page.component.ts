import { Component, OnInit } from '@angular/core';
import { Article, ArticlesApiService } from '../../service/articles-api.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  data: Article[];

  constructor(
    private articlesApi: ArticlesApiService
  ) {
  }

  ngOnInit(): void {
    this.articlesApi.getArticles().subscribe(
      result => {
        this.data = result;
      }
    );
  }
}

