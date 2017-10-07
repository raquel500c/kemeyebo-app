import { Routes } from '@angular/router';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'articles', component: ArticlesListComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: '**', redirectTo: '' }
];
