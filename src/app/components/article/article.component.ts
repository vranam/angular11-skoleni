import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../service/articles-api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
