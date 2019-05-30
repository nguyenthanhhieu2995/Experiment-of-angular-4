import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// component
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
// routes
import { productRoutes } from './product-management.routes';
// service
import { ProductsService } from './services/products.service';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [
    ProductsService
  ]
})
export class ProductManagementModule { }
