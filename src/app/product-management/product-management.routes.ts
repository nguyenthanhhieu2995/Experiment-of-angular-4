import { Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const productRoutes: Routes = [
  {
    path : 'products',
    component : ProductListComponent
  },
  {
    path : 'product/:id',
    component : ProductsComponent,
    children : [
      {
        path : '',
        component : ProductDetailComponent
      },
      {
        path : 'edit',
        component : ProductEditComponent
      },
    ]
  }
];
