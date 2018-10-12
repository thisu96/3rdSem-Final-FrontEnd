import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../dtos/customer';
import { CustomerService } from '../../services/customer.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelected: boolean = false;
  @ViewChild("frmCustomer") frmCustomer: NgForm;

  constructor(private customerService: CustomerService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadAllCustomers();
  }

  loadAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (result) => {
        this.customers = result;
        console.log(this.customers);
      }
    )
  }

  // deleteUser(user: User): void {
  //   if (confirm("Are you sure you want to delete this User?")) {
  //     this.userService.deleteUser(user.userId).subscribe(
  //       (result) => {
  //         if (result) {
  //           alert("User has been deleted successfully");
  //         } else {
  //           alert("Failed to delete the User");
  //         }
  //         this.loadAllUsers();
  //       }
  //     )
  //   }
  // }

  closeWindow(): void{
    this.dialog.closeAll();
  }

  selectCustomer(customer: Customer): void {
    this.clear();
    this.selectedCustomer = customer;
    this.tempCustomer = Object.assign({}, customer);
    this.manuallySelected = true;
  }

  clear(): void {
    let index = this.customers.indexOf(this.selectedCustomer);
    if (index !== -1) {
      this.customers[index] = this.tempCustomer;
      this.tempCustomer = null;
    }
    this.selectedCustomer = new Customer();
    this.manuallySelected = false;
  }

  saveCustomer(): void{
    this.selectedCustomer.systemEmail = "stvegmart@gmail.com";
    this.customerService.saveCustomer(this.selectedCustomer).subscribe(
      (result)=>{
        if (result){
          swal("Congrats!", "You Sussefully Registerd!", "success")
          this.clear();
          this.closeWindow();
          this.router.navigateByUrl('/homepage')
          this.clear();
        }else{
          swal("OOPs!", "Something wents wrong try again!", "error")
        }
      }
    )
  }
}

