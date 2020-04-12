import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Store} from '@ngrx/store';
import {AppState} from '@core/reducers';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {Product} from '../../models/Product';
import {createProduct} from '../../actions/product.actions';

@Component({
  selector: 'arrisca-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private productService: ProductService, private appStore: Store<AppState>, private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      productName: [''],
      productDescription: [''],
      productCost: []
    });
  }

  ngOnInit(): void {
  }

  onClear(event: any, form: FormGroupDirective): void {
    event.preventDefault();
    this.searchForm.reset();
    form.resetForm();
  }

  onSave(form: FormGroupDirective): void {
    if (form.invalid) {
      alert('Invalid form');
      return;
    }
    const {productName, productCost, productDescription} = form.value;
    const product: Product = {productName, productCost, productDescription};
    this.appStore.dispatch(createProduct({product}));
  }
}
