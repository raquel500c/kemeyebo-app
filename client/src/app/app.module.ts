import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgSelectOption } from '@angular/forms';
import {routes} from './routes';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from "ng2-file-upload";

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { ArticlesService } from './services/articles.service';


import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddArticleComponent } from './add-article/add-article.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
