import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';
import {Observable} from 'rxjs';
import {getAllProducts} from '../../selectors/product.selectors';
import {productActionTypes} from '../../actions/product.actions';
import {Store} from '@ngrx/store';
import {AppState} from '@core/reducers';
import {FormGroupDirective} from '@angular/forms';
import {Update} from '@ngrx/entity';


@Component({
  selector: 'arrisca-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  productToBeUpdate: Product;
  isUpdateActivated = false;

  constructor(private productService: ProductService, private appStateStore: Store<AppState>) {
  }

  ngOnInit(): void {
    this.products$ = this.appStateStore.select(getAllProducts);
  }

  deleteProduct(id: string): void {
    this.appStateStore.dispatch(productActionTypes.deleteProduct({id}));
  }

  updateProduct(updateForm: any): void {
    const update: Update<Product> = {
      id: this.productToBeUpdate.id,
      changes: {
        ...this.productToBeUpdate,
        ...updateForm.value
      }
    };
    this.appStateStore.dispatch(productActionTypes.updateProduct({update}));
    this.isUpdateActivated = false;
    this.productToBeUpdate = null;
  }

  showUpdateForm(product: Product): void {
    this.productToBeUpdate = {...product};
    this.isUpdateActivated = true;
  }
}
