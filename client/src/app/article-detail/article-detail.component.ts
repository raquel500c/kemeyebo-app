import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService : ArticlesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.getArticleDetail(params['id'])
  })
}
getArticleDetail(id) {
  this.articlesService.get(id)
    .subscribe((article) => {
      this.article = article
    })
}
}
