import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {Observable} from 'rxjs/Observable'
declare const $:any;

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles;
  constructor(public articlesService : ArticlesService) { }

  ngOnInit() {
     this.articlesService.getList().subscribe(result => this.articles = result)
  }

  // getArticleDetail(id) {
  //   this.articlesService.get(id)
  //     .subscribe((article) => {
  //       this.article = article
  //     })
  // }
  //
  // deleteArticle(){
  //   if (window.confirm('¿Estás seguro?')) {
  //     this.articlesService.remove(this.article._id)
  //       .subscribe(() => {
  //         this.router.navigate(['/articles/']);
  //       });
  //   }
  // }

}
