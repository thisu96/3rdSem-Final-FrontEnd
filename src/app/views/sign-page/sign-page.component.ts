import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignComponent } from '../sign/sign.component';
import { Router } from '@angular/router';
import { Employee } from '../../dtos/employee';
import { AuthAdminService } from '../../services/auth-admin.service';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css']
})
export class SignPageComponent implements OnInit {

  employee: Employee = new Employee();
  failed: boolean = true;

  constructor(private authAdminService: AuthAdminService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openClientPage(): void {
    const dialogRef = this.dialog.open(SignComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
