import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs'; // khai báo thư viện để sử dụng đôi tượng subscription
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public product: Products = null;
  public nextProductLink: number = null;
  public prevProductLink: number = null;
  public subscription: Subscription;
  // đối tượng này thuộc subscribe,
  // vì đối tượng này luôn lắng nghe nên dùng hàm onDestroy để huỷ khi kết thúc vòng đời component

  constructor(public activatedRoute: ActivatedRoute,
              public routerService: Router,
              public productService: ProductsService) { }

  ngOnInit() {
    // this.handleParamsBySnapshot();
    this.handleParams();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  handleParams() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = Number(params.id);
      this.product = this.productService.getProductById(id).currentProduct;
      this.prevProductLink = this.productService.getProductById(id).prevProductLink;
      this.nextProductLink = this.productService.getProductById(id).nextProductLink;
      console.log(params);
      console.log(this.prevProductLink);
      console.log(this.nextProductLink);
    });
  }
  // snapshot cũng tương tự nhưng có nhược điểm không thể chuyển trang trên cùng 1 router
  // handleParamsBySnapshot() {
  //   const id = Number(this.activatedRoute.snapshot.params.id);
  //   this.product = this.productService.getProductById(id);
  // }
  backToList() {
    console.log(this.activatedRoute);
    this.routerService.navigate(['products']);
  }
  onEdit() {
    this.routerService.navigate(['edit'], {relativeTo: this.activatedRoute.parent});
  }
  onDelete() {
    this.routerService.navigate(['delete'], {relativeTo: this.activatedRoute.parent});
  }
}
