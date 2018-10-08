import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../client-views/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // openSignInDialog(): void {
  //   const dialogRef = this.dialog.open(SignInComponent, {
  //     width: '550px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }



  ngOnInit() {
  }

}
