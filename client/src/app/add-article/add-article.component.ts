import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
const BASE_URL: string = environment.BASEURL ;

declare const $: any;

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articles;
  user: any;

  season = ['primavera', 'verano', 'otoño', 'invierno', 'entre tiempo', 'todas'];
  color = ['blanco', 'crema', 'gris', 'negro', 'azul', 'rojo', 'amarillo',
    'verde', 'morado', 'naranja', 'rosa', 'plateado', 'dorado', 'marrón', 'multicolor'];
  style = ['informal', 'casual', 'trabajo', 'deporte', 'fiesta', 'formal', 'formal-playa', 'etiqueta', 'varios'];
  category = ['parte de arriba', 'parte de abajo', 'cuerpo entero', 'calzado', 'accesorio', 'ropa interior', 'otra'];


  uploader: FileUploader = new FileUploader({
  url: `${BASE_URL}/api/articles/`
  });

  newArticle = {
    owner: '',
    name: '',
    season: '',
    colorsRange: '',
    style: '',
    category: '',
    notes: ''
  }

  feedback: string;

  constructor(public auth: AuthService, public router: Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    }

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  submit() {
    console.log(this.newArticle)
    this.newArticle.owner=this.user._id;
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('owner', this.newArticle.owner);
      form.append('name', this.newArticle.name);
      form.append('season', this.newArticle.season);
      form.append('colorsRange', this.newArticle.colorsRange);
      form.append('style', this.newArticle.style);
      form.append('category', this.newArticle.category);
      form.append('notes', this.newArticle.notes);
    };

    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.router.navigate(['/articles']);

  }

}
