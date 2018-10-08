import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

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
