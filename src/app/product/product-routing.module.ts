import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {ProductResolver} from './resolvers/product.resolver';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      products: ProductResolver
    }
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
