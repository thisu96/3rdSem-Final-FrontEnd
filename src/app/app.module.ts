import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { NavBarComponent } from './client-views/nav-bar/nav-bar.component';
import { HomepageComponent } from './client-views/homepage/homepage.component';
import { RegisterComponent } from './client-views/register/register.component';
import { ClientSigninComponent } from './client-views/client-signin/client-signin.component';
import { AboutUsComponent } from './client-views/about-us/about-us.component';
import { NewsComponent } from './client-views/news/news.component';
import { ContactUsComponent } from './client-views/contact-us/contact-us.component';
import { ApproutingModule } from './routing/approuting/approuting.module';
import { FooterComponent } from './client-views/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManageItemComponent } from './views/manage-item/manage-item.component';
import { ManageEmployeeComponent } from './views/manage-employee/manage-employee.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AppadminroutingModule } from './routing/appadminrouting/appadminrouting.module';
// import { VegCartVegComponent } from './client-views/veg-cart-veg/veg-cart-veg.component';
// import { VegCartFruitComponent } from './client-views/veg-cart-fruit/veg-cart-fruit.component';
// import { VegCartOtherComponent } from './client-views/veg-cart-other/veg-cart-other.component';
import { CustomerPageComponent } from './client-views/customer-page/customer-page.component';
import { MyAccountComponent } from './client-views/my-account/my-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { CategoriesService } from './services/categories.service';
import { ItemService } from './services/item.service';
import { AuthGuard } from './guards/auth.guard';
import { FruitsComponent } from './client-views/fruits/fruits.component';
import { OthersComponent } from './client-views/others/others.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ItemListComponent } from './client-views/item-list/item-list.component';
import { SignComponent } from './views/sign/sign.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignPageComponent } from './views/sign-page/sign-page.component';
import { AuthAdminService } from './services/auth-admin.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileService } from './services/file.service';
import { CategoryFilterPipe } from './filters/category-filter.pipe';
import { ManageOrdersComponent } from './views/manage-orders/manage-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    RegisterComponent,
    ClientSigninComponent,
    AboutUsComponent,
    NewsComponent,
    ContactUsComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    ManageItemComponent,
    ManageEmployeeComponent,
    SettingsComponent,
    // VegCartVegComponent,
    // VegCartFruitComponent,
    // VegCartOtherComponent,
    CustomerPageComponent,
    MyAccountComponent,
    FruitsComponent,
    OthersComponent,
    ConfirmEqualValidatorDirective,
    ItemListComponent,
    SignPageComponent,
    SignComponent,
    SignUpComponent,
    CategoryFilterPipe,
    ManageOrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBl3F0B-UmmuBp-fe2NWU5Re-cwgvl703M',
      authDomain: 'finalprojectdb-875dc.firebaseapp.com',
      projectId: 'finalprojectdb-875dc',
      storageBucket: 'finalprojectdb-875dc.appspot.com',
    }),
    AngularFireStorageModule,
    ApproutingModule,
    AppadminroutingModule
  ],
  providers: [
    CustomerService,
    EmployeeService,
    ItemService,
    CategoriesService,
    AuthService,
    AuthAdminService,
    FileService,
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterComponent,
    ClientSigninComponent,
    CustomerPageComponent,
    SignComponent
  ]
})
export class AppModule { }
