import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { HttpClient, HttpClientModule, provideHttpClient, } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideCharts,withDefaultRegisterables} from 'ng2-charts';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    ProductListingComponent,
    AddProductsComponent,
    LoginComponent,
    HttpClient,
    AppComponent,
    provideClientHydration(),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()) // Correctly pass the registerables

  ]
};
