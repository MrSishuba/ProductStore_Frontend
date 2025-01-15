import { Injectable } from '@angular/core';
import { Observable, map, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../Shared/register-user';
import { LoginUser } from '../Shared/login-user';
import { User } from '../Shared/user';
import { Product } from '../Shared/products';
import { ReportDataViewModel } from '../Shared/reporting';

@Injectable({
  providedIn: 'root'
})

export class APIService {

apiUrl = 'http://localhost:5240/api/'

httpOptions ={
  headers: new HttpHeaders({
    ContentType: 'application/json'
  })
}
  constructor(private httpClient: HttpClient) {
  }

  RegisterUser(registerUser: RegisterUser){
    return this.httpClient.post(`${this.apiUrl}Authentication/Register`, registerUser, this.httpOptions)
  }

  getProducts() {
    return this.httpClient.get(`${this.apiUrl}Store/ProductListing`)
    .pipe(map(result => result))
  }

  LoginUser(loginUser: LoginUser){
    return this.httpClient.post<User>(`${this.apiUrl}Authentication/Login`, loginUser, this.httpOptions)
  }

  addProduct(file:FormData){
    
    return this.httpClient.post(`${this.apiUrl}Store/AddProduct`, file)
  }

  getBrands(): Observable<any>
  {
    return this.httpClient.get(`${this.apiUrl}Store/Brands`)
    .pipe(map(result => result))
  }

  getProductTypes(): Observable<any>
  {
    return this.httpClient.get(`${this.apiUrl}Store/ProductTypes`)
    .pipe(map(result => result))
  }

  getReportData()
  {
    return this.httpClient.get<ReportDataViewModel>(`${this.apiUrl}/Report/fetchReportInfo`)
  }


}