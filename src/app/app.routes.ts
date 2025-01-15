import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { ProductsReportsComponent } from './product-report/product-report.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'productListing', component: ProductListingComponent },
    { path: 'addProduct', component: AddProductsComponent },
    {path: 'reports', component:ProductsReportsComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
