import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdlModule
  ]
})
export class SharedModule { }
