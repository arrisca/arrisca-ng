import {NgModule} from '@angular/core';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import {StoreModule} from '@ngrx/store';
import {productReducers} from './reducers/product.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './effects/product.effects';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {SharedModule} from '@shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import {ProductResolver} from './resolvers/product.resolver';

@NgModule({
  declarations: [ProductListComponent, CreateProductComponent, ProductComponent],
  imports: [
    StoreModule.forFeature('products', productReducers),
    EffectsModule.forFeature([ProductEffects]),
    ProductRoutingModule,
    HttpClientModule,
    SharedModule.forFeature(),
    CommonModule,
    FormsModule
  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {
}
