import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Products[];
  public subscription: Subscription;
  // tslint:disable-next-line:variable-name
  constructor(private _products: ProductsService,
              public routerService: Router,
              public activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      const name = data.name;
      const price = data.price;
      this.products = this._products.getAllProduct(name, price);
    });
  }
  // showDetailProduct(index) {
  //   const url = `products/${index}`;
  //   this.routerProduct.navigate([url]);
  // }
}
