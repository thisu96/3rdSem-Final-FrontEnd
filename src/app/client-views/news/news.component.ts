import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick = function(){
    this.router.navigateByUrl('/fruits');
  }

  btnClick2 = function(){
    this.router.navigateByUrl('/news');
  }

  btnClick3 = function(){
    this.router.navigateByUrl('/others');
  }

}
