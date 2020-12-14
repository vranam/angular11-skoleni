import { Component, OnInit } from '@angular/core';
import { ArticlesApiService, CreateArticleRequest } from '../../service/articles-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.scss']
})
export class EditorPageComponent implements OnInit {

  inProgress: boolean;
  data = {
    title: '',
    content: ''
  };

  constructor(
    private articlesApi: ArticlesApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.inProgress = true;
    const request: CreateArticleRequest = {
      title: this.data.title,
      content: this.data.content
    };

    this.articlesApi.addArticle(request).subscribe(
      result => {
        this.inProgress = false;
        console.log('!OK');
        this.router.navigate(['content']);
      },
      error => {
        console.error(error);
        this.inProgress = false;
      }
    );

  }

}
