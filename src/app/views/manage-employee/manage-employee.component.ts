import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Employee } from '../../dtos/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employees: Array<Employee> = [];
  selectedEmployee: Employee = new Employee();
  tempEmployee: Employee = null;
  manuallySelected: boolean = false;
  @ViewChild("frmEmployee") frmEmployee: NgForm;

  constructor(private employeeService: EmployeeService, private http: HttpClient){}

  ngOnInit() {
    this.loadAllEmployees();
  }

  loadAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
        console.log(this.employees);
      }
    )
  }

  selectEmployee(employee: Employee): void {
    this.clear();
    this.selectedEmployee = employee;
    this.tempEmployee = Object.assign({}, employee);
    this.manuallySelected = true;
  }

  clear(): void {
    let index = this.employees.indexOf(this.selectedEmployee);
    if (index !== -1) {
      this.employees[index] = this.tempEmployee;
      this.tempEmployee = null;
    }
    this.selectedEmployee = new Employee();
    this.manuallySelected = false;
  }

  saveEmployee(): void{
    this.employeeService.saveEmployee(this.selectedEmployee).subscribe(
      (result)=>{
        if (result){
          swal("Congrats!", "You Sussefully Registerd!", "success")
          this.clear();
          this.loadAllEmployees();
        }else{
          swal("OOPs!", "Something wents wrong try again!", "error")
        }
      }
    )
  }

  deleteEmployee(employee: Employee): void {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(employee.userName).subscribe(
        (result) => {
          if (result) {
            swal("Congrats!", "You Sussefully delete data!", "success")
          } else {
            swal("OOPs!", "Failed to delete data!", "error")
          }
          this.loadAllEmployees();
        }
      ) 
    }
  }

}
