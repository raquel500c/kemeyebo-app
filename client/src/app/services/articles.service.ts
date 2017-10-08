import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {
  BASE_URL: string = 'http://localhost:3000';
  options : {withCredentials:true };

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/articles`)
      .map((res) => res.json())
  }

  newArticle () {
    return this.http.post(`${this.BASE_URL}/api/articles` , this.options )
     .map (res => res.json());
  }
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/articles/${id}`)
      .map((res) => res.json())
  }

  edit(article) {
       return this.http.put(`${this.BASE_URL}/api/articles/${article.id}`, article)
         .map((res) => res.json());
  }

  remove(id) {
   return this.http.delete(`${this.BASE_URL}/api/articles/${id}`)
     .map((res) => res.json());
  }

 }
