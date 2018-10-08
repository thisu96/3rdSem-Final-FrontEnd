import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from '../../client-views/homepage/homepage.component';
import { AboutUsComponent } from '../../client-views/about-us/about-us.component';
import { NewsComponent } from '../../client-views/news/news.component';
import { ContactUsComponent } from '../../client-views/contact-us/contact-us.component';
import { NavBarComponent } from '../../client-views/nav-bar/nav-bar.component';
// import { VegCartVegComponent } from '../../client-views/veg-cart-veg/veg-cart-veg.component';
// import { VegCartFruitComponent } from '../../client-views/veg-cart-fruit/veg-cart-fruit.component';
// import { VegCartOtherComponent } from '../../client-views/veg-cart-other/veg-cart-other.component';
import { MyAccountComponent } from '../../client-views/my-account/my-account.component';
import { FruitsComponent } from '../../client-views/fruits/fruits.component';
import { OthersComponent } from '../../client-views/others/others.component';
import { ItemListComponent } from '../../client-views/item-list/item-list.component';

const approutes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'item-list', component: ItemListComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'nav-bar', component: NavBarComponent},
  {path:'news', component: NewsComponent},
  {path:'fruits', component: FruitsComponent},
  {path:'others', component: OthersComponent},
  {path:'my-account', component: MyAccountComponent},
  {path: '', pathMatch:'full', redirectTo: '/homepage'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApproutingModule { }
