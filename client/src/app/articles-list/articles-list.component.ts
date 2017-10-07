import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles;
  constructor(public articlesService : ArticlesService) { }

  ngOnInit() {
     this.articlesService.getList().subscribe(result => this.articles=result)
  }

}
