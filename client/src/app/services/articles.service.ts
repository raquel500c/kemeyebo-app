import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
const BASE_URL: string = environment.BASEURL + "/api";

@Injectable()
export class ArticlesService {

  options : { withCredentials:true };

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${BASE_URL}/articles`)
      .map((res) => res.json())
      .map( list => {
        return list.map( e => {
          if (!e.image.includes('http')) {
          e.image = BASE_URL + e.image;
          };
          console.log(e.image);
          return e;
        });
      })
  }

  newArticle () {
    return this.http.post(`${BASE_URL}/articles`, this.options )
     .map (res => res.json());
  }
  get(id) {
    return this.http.get(`${BASE_URL}/articles/${id}`)
      .map((res) => res.json())
  }

  edit(article) {
       return this.http.put(`${BASE_URL}/articles/${article.id}`, article)
         .map((res) => res.json());
  }

  remove(id) {
   return this.http.delete(`${BASE_URL}/articles/${id}`)
     .map((res) => res.json());
  }

 }
