import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState, selectAll} from '../reducers/product.reducers';

export const productFeatureSelector = createFeatureSelector<ProductState>('products');

export const getAllProducts = createSelector(productFeatureSelector, selectAll);
export const areProductsLoaded = createSelector(productFeatureSelector, (state: ProductState) => state.productLoaded);
