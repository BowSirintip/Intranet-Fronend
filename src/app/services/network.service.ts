import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';
import { Product } from '../models/product.model';

//upgrade service
@Injectable({
  providedIn: 'root'
})


export class NetworkService {

  baseAPIURL = environment.baseAPIURL;

  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseAPIURL + "product", {

    })
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.baseAPIURL +  `product/${id}`)
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(this.baseAPIURL + `product/${id}`)
  }

  getImageNetwork(image) {
    if (image) {
      return this.baseAPIURL + `product/images/${image}`;
    }
    return this.baseAPIURL + 'assets/images/not_found.jpg';
  }

  addProduct(product: Product) {
    return this.httpClient.post(this.baseAPIURL + `product`, this.makeFormData(product))
  }

  editProduct(product: Product) {
    return this.httpClient.put(this.baseAPIURL + `product/${product.productId}`, this.makeFormData(product))
  }

  login(member: Member): Observable<any>{
    return this.httpClient.post(this.baseAPIURL + `auth/login`, member)
  }

  register(member: Member): Observable<any> {
    return this.httpClient.post(this.baseAPIURL + `auth/register`, member)
  }

  makeFormData(product: Product): FormData{
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("price",`${product.price}`);
    formData.append("stock", `${product.stock}`);
    formData.append("formFile", product.image);
    return formData;
  }
}
