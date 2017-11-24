import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import { AuthService } from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-outfit',
  templateUrl: './list-outfit.component.html',
  styleUrls: ['./list-outfit.component.css']
})
export class ListOutfitComponent implements OnInit {
  user: any;
  error: any;
  articles;
  article;

  constructor(
    public auth : AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private articlesService : ArticlesService) { }

    ngOnInit() {
      this.user = this.auth.getUser()
      this.articlesService.getList(this.user).subscribe(result => this.successCb(result) )
    }

    errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(result) {
      this.articles = result
      this.error = null;
      console.log("EL USUARIO ES", this.user)
      console.log("ESTOY LOGEADO")
    }

}
