import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from '../../views/main/main.component';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { ManageItemComponent } from '../../views/manage-item/manage-item.component';
import { ManageEmployeeComponent } from '../../views/manage-employee/manage-employee.component';
import { SignComponent } from '../../views/sign/sign.component';
import { SignPageComponent } from '../../views/sign-page/sign-page.component';
import { ManageOrdersComponent } from '../../views/manage-orders/manage-orders.component';
import { ManageItemGuard } from '../../guards/manage-item.guard';

const appadminroutes: Routes = [
  {path:'sign-page',component: SignPageComponent},
  {path: 'main', component: MainComponent,
    children: [
      
      {path: 'dashboard', component: DashboardComponent},
      {path:'manage-item', component: ManageItemComponent},
      {path: 'manage-employee', component: ManageEmployeeComponent},
      {path: 'manage-orders', component: ManageOrdersComponent},
      {path: '', pathMatch: 'full', redirectTo: '/main/dashboard'}
    ]
  },
  {path:'sign', component: SignComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appadminroutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppadminroutingModule { }
