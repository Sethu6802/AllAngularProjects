import { Injectable } from '@angular/core';
import { Product } from '../app/Product';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private products: Product[] = [];

  constructor() {
    this.products[0] = new Product(101,'Tata','Dishwasher',10,40000);
    this.products[1] = new Product(102,'Samsung','Washing Machine',7,60000);
    this.products[2] = new Product(103,'Tata','Car',3,600000);
    this.products[3] = new Product(104,'Bosch','Dishwasher',5,54000);
  }

  getProducts(){
    return this.products;
  }
}
