import {createEntityAdapter, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import {Product} from '../models/Product';
import {productActionTypes} from '../actions/product.actions';
import {createReducer, on} from '@ngrx/store';

// product entity state with list of ids and dictionary of productId: product, for fast lookup and sorting
export interface ProductState extends EntityState<Product> {
  productLoaded: boolean;
}

// adapter provide utilities method to operates on state objects similar to JPAEntityManager
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = productAdapter.getInitialState({
  productLoaded: false
});

export const productReducers = createReducer(initialState,

  on(productActionTypes.productLoaded, (state: ProductState, action: { products: Product[] }) => {
    return productAdapter.addAll(
      action.products,
      {...state, productLoaded: true}
    );
  }),

  on(productActionTypes.createProduct, (state: ProductState, action: { product: Product }) => {
    return productAdapter.addOne(action.product, state);
  }),

  on(productActionTypes.deleteProduct, (state: ProductState, action: { id: string }) => {
    return productAdapter.removeOne(action.id, state);
  }),

  on(productActionTypes.updateProduct, (state: ProductState, action: { update: Update<Product> }) => {
    return productAdapter.updateOne(action.update, state);
  })
);

export const {selectAll, selectIds} = productAdapter.getSelectors();
