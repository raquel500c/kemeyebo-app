import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
declare const $:any;

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles;
  article;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService : ArticlesService) { }

  ngOnInit() {
    this.articlesService.getList().subscribe(result => this.articles = result)
  }

  deleteArticle(id){
    if (window.confirm('¿Estás seguro?')) {
      this.articlesService.remove(id)
        .subscribe(() => {
        this.articlesService.getList().subscribe(result => this.articles = result)
        });
    }
  }

}
