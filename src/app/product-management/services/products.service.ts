import { Injectable } from '@angular/core';
import { Products } from '../models/products.class';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Products[] = [
    {
      id: 1,
      name: 'Iphone 7 plus',
      price: 1700000,
      status: true
    },
    {
      id: 2,
      name: 'Samsung galaxy S8',
      price: 1200000,
      status: false
    },
    {
      id: 3,
      name: 'Samsung galaxy S9',
      price: 1300000,
      status: false
    },
    {
      id: 4,
      name: 'Samsung galaxy A10',
      price: 1000000,
      status: false
    },
  ];
  public currentProduct: Products;
  public nextProductLink: number;
  public prevProductLink: number;
  constructor() { }

  getAllProduct(name?: string, price?: number) {
    console.log(name);
    let result: Products[] = this.products;
    if (name) {
      result = this.products.filter((filteredProducts) => {
        return filteredProducts.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      });
    }
    if (price) {
      result = this.products.filter((filteredProducts) => {
        return filteredProducts.price === price;
      });
    }
    return result;
  }
  getProductById(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id === id) {
        if (index + 1 < this.products.length) {
          this.nextProductLink = this.products[index + 1].id;
        } else {
          this.nextProductLink = -1;
        }
        if (index > 0) {
          this.prevProductLink = this.products[index - 1].id;
        } else {
          this.prevProductLink = -1;
        }
        this.currentProduct = this.products[index];
        return {  currentProduct : this.currentProduct,
                  nextProductLink : this.nextProductLink,
                  prevProductLink : this.prevProductLink };
      }
    }
  }
  setProductById(productAfterEdit: Products) {
    for (let product of this.products) {
      if (product.id === productAfterEdit.id ) {
        product = productAfterEdit;
      }
    }
  }
}
