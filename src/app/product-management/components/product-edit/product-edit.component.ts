import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Products } from './../../models/products.class';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  public product: Products = null;
  public subscription: Subscription;

  constructor(public activateRoute: ActivatedRoute,
              public productService: ProductsService,
              public routerService: Router) { }

  ngOnInit() {
    this.handleParams();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  handleParams() {
    this.activateRoute.parent.params.subscribe((params) => {
      console.log(params);
      const id = Number(params.id);
      this.product = this.productService.getProductById(id).currentProduct;
    });
  }
  editProduct() {
    console.log(this.product);
    this.productService.setProductById(this.product);
    this.routerService.navigate(['products']);
  }

}
