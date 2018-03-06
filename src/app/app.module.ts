import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Component } from '@angular/core/src/metadata/directives';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent,
      },
      {
        path:'home',
        canActivate:[AuthGuard],
        component:HomeComponent, 
       },
      {
        path:'add-product',
        component:AddProductComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'edit-product/:id',
        component:EditProductComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'sign-up',
        component:SignUpComponent
      }
    ])
  ],
  providers: [ UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
