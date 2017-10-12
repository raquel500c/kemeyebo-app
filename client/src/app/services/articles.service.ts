import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { environment } from '../../environments/environment';
const BASE_URL: string = environment.BASEURL ;

@Injectable()
export class ArticlesService {
  id;

  options : { withCredentials:true };

  constructor(private http: Http) { }

  getList(id) {
    this.id = id._id;
    console.log("LOCO THIS", this.id)
    //return this.http.get(`${BASE_URL}/api/articles`, this.id)
  // getList(id_user) {
    return this.http.get(`${BASE_URL}/api/articles/unico/${this.id}`)
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
    return this.http.post(`${BASE_URL}/api/articles`, this.options )
     .map (res => res.json());

  }
  get(id) {
    return this.http.get(`${BASE_URL}/api/articles/${id}`)
      .map((res) => res.json())
  }

  edit(article) {
       return this.http.put(`${BASE_URL}/api/articles/${article.id}`, article)
         .map((res) => res.json());
  }

  remove(id) {
   return this.http.delete(`${BASE_URL}/api/articles/${id}`)
     .map((res) => res.json());
  }

 }
