import {createAction, props} from '@ngrx/store';
import {Product} from '../models/Product';
import {Update} from '@ngrx/entity';

export const loadProducts = createAction(
  '[Product List operation] Load Products via service'
);

export const productLoaded = createAction(
  '[Product effect] Product loaded successfully',
  props<{ products: Product[] }>()
);

export const createProduct = createAction(
  '[Create Product Component] Create Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product List operation] Delete Product',
  props<{ id: string }>()
);

// Update is an auxiliary type provided by NgRx Entity to help model partial entity update
export const updateProduct = createAction(
  '[Product List operation] Update Product',
  props<{ update: Update<Product> }>()
);

export const productActionTypes = {
  loadProducts,
  productLoaded,
  createProduct,
  deleteProduct,
  updateProduct
};
