import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // employees: Array<Employee> = [];
  // selectedEmployee: Employee = new Employee();
  // tempEmployee: Employee = null;
  // manuallySelected: boolean = false;
  // @ViewChild("frmEmployee") frmEmployee: NgForm;

  constructor() { }

  ngOnInit() {
  }

  // saveEmployee(): void{
  //   this.employeeService.saveEmployee(this.selectedEmployee).subscribe(
  //     (result)=>{
  //       if (result){
  //         swal("Congrats!", "You Sussefully Registerd!", "success")
  //         this.clear();
  //         this.loadAllEmployees();
  //       }else{
  //         swal("OOPs!", "Something wents wrong try again!", "error")
  //       }
  //     }
  //   )
  // }
}
