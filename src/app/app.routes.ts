import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { Component } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [

    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'dashboard',
    component:DashboardComponent,
    children:[
        {path:'',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'inventory',component:InventoryComponent},
        {path:'orders',component:ProductsComponent},
        {path:'sales',component:ProductsComponent},
        {path:'customers',component:ProductsComponent}
    ]
},
    



];
