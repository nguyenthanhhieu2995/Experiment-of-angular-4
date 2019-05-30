import { NgModule } from '@angular/core'; // Nhúng Decorator cho module
import { BrowserModule } from '@angular/platform-browser'; // BrowserModule là cấu trúc là cơ sở hạ tầng cơ bản của 1 web-app.
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ChildComponent } from './components/child/child.component';
import { TransformdataComponent } from './components/transformdata/transformdata.component';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// pipe
import { FormatDataPipe } from './pipes/format-data.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

// services
import { MovieService } from './services/movie.service';
import { ProductsService } from './product-management/services/products.service';

// router components
import { appRoutes } from './app.routes';

// module
import { ProductManagementModule } from './product-management/product-management.module';

@NgModule({ // @Decorator là một function nhận vào metadata giúp cho decorator biết cần mô tả gì đối với module này.
  declarations: [ // nơi khai báo các Component.
    AppComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    AttributeComponent,
    ChildComponent,
    FormatDataPipe,
    TransformdataComponent,
    FilterPipe,
    SortPipe,
    LifecycleHookComponent,
    MovieListComponent,
    MovieEditComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [ // nơi để nhúng các code, các thành phần của module khác vào module này để sử dụng.
    BrowserModule,
    FormsModule,
    ProductManagementModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService
  ], // nơi khai báo service để sử dụng cho module này.
  bootstrap: [AppComponent]
})
export class AppModule { } // xuất module.
