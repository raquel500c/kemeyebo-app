import { Component, OnInit } from '@angular/core';
import { FileUploader} from "ng2-file-upload";
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articles;

  uploader: FileUploader = new FileUploader({
  url: 'http://localhost:3000/api/articles/'
  });

  newArticle = {
    name : '',
    season : '',
    colorsRange : '',
    style : '',
    category : '',
    notes : ''
  }

  feedback : string;

  constructor() { }

  ngOnInit() {
    // this.uploader.onSuccessItem = (item, response) => {
    //   this.feedback = JSON.parse(response).message;
    // }
    //
    // this.uploader.onErrorItem = (item, response, status, headers) => {
    //   this.feedback = JSON.parse(response).message;
    // };
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newArticle.name);
      form.append('season', this.newArticle.season);
      form.append('colorsRange', this.newArticle.colorsRange);
      form.append('style', this.newArticle.style);
      form.append('category', this.newArticle.category);
      form.append('notes', this.newArticle.notes);
    };

    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => console.log("hecho")
    // this.router.navigate(['/articles/']);

  }

}
