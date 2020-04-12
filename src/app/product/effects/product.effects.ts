import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {productActionTypes} from '../actions/product.actions';
import {concatMap, map, tap} from 'rxjs/operators';

@Injectable()
export class ProductEffects {

  constructor(private productService: ProductService, private action$: Actions, private router: Router) {
  }

  loadProductEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActionTypes.loadProducts),
      concatMap(() => this.productService.getAllProducts()),
      map(products => productActionTypes.productLoaded({products}))
    )
  );

  createProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActionTypes.createProduct),
      concatMap((action) => this.productService.createProduct(action.product)),
      tap(() => this.router.navigateByUrl('/products'))
    ), {dispatch: false}
  );

  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActionTypes.deleteProduct),
      concatMap((action) => this.productService.deleteProduct(action.id))
    ), {dispatch: false}
  );

  updateProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(productActionTypes.updateProduct),
      concatMap((action) => this.productService.updateProduct(action.update.id, action.update.changes))
    ), {dispatch: false}
  );

}
