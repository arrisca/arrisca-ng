import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '@core/reducers';
import {select, Store} from '@ngrx/store';
import {filter, first, tap} from 'rxjs/operators';
import {loadProducts, productLoaded} from '../actions/product.actions';
import {areProductsLoaded} from '../selectors/product.selectors';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {
  constructor(private appStateStore: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.appStateStore.pipe(
      select(areProductsLoaded),
      tap((isProductLoaded: any) => {
        if (!isProductLoaded) {
          this.appStateStore.dispatch(loadProducts());
        }
      }),
      filter((productLoaded: any) => productLoaded),
      first()
    );
  }

}
