import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  data: Article[] = [
    {title: 'Článek 1', content: 'blabla', author: 'Jan Nevidím', created: new Date()},
    {title: 'Článek 2', content: 'vldsdsjdj jddshxs jdjsjjdjd jsdh', author: 'xyz', created: new Date()}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}


interface Article {
  title: string;
  content: string;
  author: string;
  created: Date;
}
