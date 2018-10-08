import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../dtos/item';
import { ItemService } from '../../services/item.service';
import { Customer } from '../../dtos/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  getItemsData: Array<Item> = [];

  constructor(private itemService: ItemService,private router: Router, private customerService: CustomerService) {
    
  }
  //constructor(i)

  public show:boolean = false;
  public buttonName:any = 'Show';
  customer: Customer = new Customer();

  ngOnInit(){

    this.customerService.getCustomer(localStorage.getItem('user')).subscribe (
      ((result)=>{
        this.customer = result;
      })
    );

  }
  // ngOnInit () { 
  //   this.itemService.itemss.subscribe((value) => {
  //     this.getItemsData = value;
  //     console.log(this.getItemsData)
  //   });
  //  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  // btnClick = function(){
  //   this.router.navigateByUrl('/item-list');
  // }

}
