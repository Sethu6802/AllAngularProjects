import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Tablet', price: 300, createdAt: new Date('2024-07-10') },
    { id: 2, name: 'Smartphone', price: 500, createdAt: new Date('2024-01-15') },
    { id: 3, name: 'Laptop', price: 1000, createdAt: new Date('2023-12-24') }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
