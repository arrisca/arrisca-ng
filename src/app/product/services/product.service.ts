import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient: HttpClient;
  serverUrl = environment.serverUrl;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.serverUrl}/getProductList`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.serverUrl}/saveProduct`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/deleteProduct/${id}`, {responseType: 'text'});
  }

  updateProduct(id: string | number, changes: Partial<Product>): Observable<any> {
    return this.httpClient.put(`${this.serverUrl}/updateProduct/${id}`, changes, {responseType: 'text'});
  }
}
