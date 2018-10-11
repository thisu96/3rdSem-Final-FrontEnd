import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Router} from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../services/auth.service';
import { Customer } from '../../dtos/customer';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  customer: Customer = new Customer();
  failed: boolean;
  @ViewChild('btnClose') btnClose : ElementRef; 

  constructor(private authService: AuthService,private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  close(): void{
    this.btnClose.nativeElement.closeDialog();
  }

  loginDb(): void{
    this.authService.login(this.customer).subscribe(
      (result)=>{
        this.failed = !result;
        if(result){
          localStorage.setItem('user', this.customer.userName);
          localStorage.setItem('contact', this.customer.contact);
        }
       // const dialogRef = this.dialog.closeAll();
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  closeDialog() {
    //this.openDialog().close();
  }

}
