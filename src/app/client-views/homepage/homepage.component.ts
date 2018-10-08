import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { ClientSigninComponent } from '../client-signin/client-signin.component';
import { CustomerPageComponent } from '../customer-page/customer-page.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openClientPage(): void {
    const dialogRef = this.dialog.open(CustomerPageComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  btnClickMain = function(){
    this.router.navigateByUrl('/veg-nav');
  }

  ngOnInit() {
  }



}

