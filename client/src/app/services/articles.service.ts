import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
const  BASE_URL: string = environment.BASEURL;

@Injectable()
export class ArticlesService {
  public BASE_URL= environment.BASEURL;
  options : {withCredentials:true };

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/articles`)
      .map((res) => res.json())
      .map( list => {
        return list.map( e => {
          if (!e.image.includes('http')){
            e.image = this.BASE_URL+e.image;
          };
          console.log(e.image);
          return e;
        });
      })
  }

  newArticle () {
    return this.http.post(`${this.BASE_URL}/api/articles`, this.options )
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
