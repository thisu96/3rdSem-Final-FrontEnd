import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

userName = '';

  constructor(private router: Router, private authService: AuthService) { 
    this.userName = localStorage.getItem('user');
  }

  ngOnInit() {
  }

  btnClick4 = function () {
    this.router.navigateByUrl('/contact-us');
  };

  btnClick = function(){
    this.router.navigateByUrl('/about-us');
  }

  btnClick2 = function(){
    this.router.navigateByUrl('/homepage');
  }

  btnClick3 = function(){
    this.router.navigateByUrl('/news');
  }

  btnClick6 = function(){
    this.router.navigateByUrl('/my-account');
  }
}
