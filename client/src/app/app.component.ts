import { Component ,OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: any;
  error: any;
  title = 'Kemeyebo';

  constructor( public auth : AuthService, private router : Router ) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user => this.successCb(user));
    this.auth.getLoginEventEmitter().subscribe(user => this.successCb(user));

    $(".button-collapse").sideNav();
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
    this.router.navigate(['/'])
  }

}
