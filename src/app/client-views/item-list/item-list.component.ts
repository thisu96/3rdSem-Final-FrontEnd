import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ordersdetails } from '../../dtos/ordersdetails';
import { Orders } from '../../dtos/orders';
import { Item } from '../../dtos/item';
import { ItemService } from '../../services/item.service';
import swal from "sweetalert2";
import { MyAccountComponent } from '../my-account/my-account.component';
import { AuthService } from '../../services/auth.service';
import { Customer } from '../../dtos/customer';
import { CustomerService } from '../../services/customer.service';
import { OrdersService } from '../../services/orders.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  orderDate;
  selectedCustomer: Customer= new Customer();
  selectOrder: Orders= new Orders();
  getSelectedItems: Array<Item> = [];
  items: Array<Item> = [];
  selectedItem: Item = new Item();
  tempItem: Item = null;
  manuallySelected: boolean = false;
  cartProducts: any;
  orderDetails: Array<Ordersdetails> = [];
  orderDetail: Ordersdetails;
  total_amount: number = 0;
  order = new Orders();
  @ViewChild('frmCheckout') frmCheckout = NgForm;

  userName = '';
  customer: Customer = new Customer();
  
  //myAccount = new MyAccountComponent(this.items);

  constructor(private router: Router, private itemService: ItemService,private authService: AuthService,
  private customerService: CustomerService, private orderService: OrdersService) { 
    //this.userName = localStorage.getItem('user');
    //this.contact = localStorage.getItem('contact');
    this.orderDate = new Date();
  }

  public show:boolean = false;
  public buttonName:any = 'Show';
  searchTerm: string;

  ngOnInit() {
    this.loadAllItems();
    this.customerService.getCustomer(localStorage.getItem('user')).subscribe (
      ((result)=>{
        this.selectedCustomer = result;
      })
    );
  }

  addToAccount(item,qty, qty1){
    let total = qty * item.oneKiloPrice;
    let total2 = qty1 * item.oneKiloPrice/1000;
    let total3 = Number(total) + Number(total2);

    console.log(total)
    console.log(total2)
    this.total_amount = this.total_amount + total3;
   // this.total_amount = this.total_amount + total2;
    let remainingQTY = item.qtyOnHand - qty;
    this.orderDetail = new Ordersdetails(qty,total3,item);
    this.orderDetails.push(this.orderDetail);
    document.getElementById('finaltotal').setAttribute('value', this.total_amount.toString());
  }

  loadAllItems(): void {
    this.itemService.getAllItems().subscribe(
      (result) => {
        this.items = result;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].imageUrl = this.itemService.getImage(this.items[i].imageUrl);
          }
      });
  }

  selectItem(item: Item): void {
    //this.clear();
    this.selectedItem = item;
    this.tempItem = Object.assign({}, item);
    this.manuallySelected = true;
  }

  orderNow = function(){
    swal({
      title: 'ENTER ORDER QTY..',
      html:
      '<input id="swal-input1" class="swal2-input" autofocus placeholder="Enter Order Qty In KILO-GRAMS(KG)">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Enter Order Qty In GRAMS(G)">',
  });
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggle2() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  totalGrames(){
    let qty;
    let oneKiloPrice;
    let totalGrames = qty/1000*oneKiloPrice;
  }

  addItems(): void{
    // let totalKiloGrames = this.selectedItem.oneKiloPrice / 1000 * qty * 100;
    // console.log(this.selectedItem.oneKiloPrice/1000*qty*100)
    // document.getElementById('finalTotal').setAttribute('value', this.total_amount.toString());
    console.log("aaaaaaaaaaaaaaa");
  }

  btnClick = function(){
    this.router.navigateByUrl('/my-account');
  }

  placeOrder(orderDate) {
    this.selectOrder.priority="High";
    this.selectOrder.email = "stvegmart@gmail.com";
    this.selectOrder.deliveryFee = "300.00";
    this.selectOrder.customer = this.selectedCustomer;
    this.selectOrder.orderDetailDTOs = this.orderDetails;
    console.log(this.selectOrder.orderDate);
    console.log()
    this.orderService.placeOrder(this.selectOrder).subscribe(result => {
      if (result) {
        swal("Congrats","Order has been saved successfully","success");
        location.reload();
      } else {
        swal("OOps","Failed to save the order","error");
      }
    });
  }

  logout(): void{
    this.authService.logout();
    localStorage.removeItem('user');
    location.reload();
  }
}
