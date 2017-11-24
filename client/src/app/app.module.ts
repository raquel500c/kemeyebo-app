import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgSelectOption } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { ArticlesService } from './services/articles.service';
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FileSelectDirective } from "ng2-file-upload";
import { MaterializeModule } from 'angular2-materialize';
import { ListOutfitComponent } from './list-outfit/list-outfit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    AddArticleComponent,
    FileSelectDirective,
    ListOutfitComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule
  ],
  providers: [AuthService, IsLoggedInService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
