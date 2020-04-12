import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULE = [
  MatButtonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatFormFieldModule, MatTableModule, MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULE
  ]
})

export class SharedModule {
  static forFeature() {
    return MATERIAL_MODULE;
  }
}
