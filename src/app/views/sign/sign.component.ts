import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthAdminService } from '../../services/auth-admin.service';
import { Employee } from '../../dtos/employee';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  employee: Employee = new Employee();
  failed: boolean = true;

  constructor(private authAdminService: AuthAdminService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  loginDb(): void{
    this.authAdminService.admin(this.employee).subscribe(
      (result)=>{
        this.failed = !result;
        const dialogRef = this.dialog.closeAll();
      }
    );
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
