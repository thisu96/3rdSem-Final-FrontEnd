import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

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
