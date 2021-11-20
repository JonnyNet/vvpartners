import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  CommonModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ]
})
export class SharedModule { }
