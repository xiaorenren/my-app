import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytvComponent } from './mytv.component';
import { MytvRoutingModule } from './mytv.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MytvRoutingModule
  ],
  declarations: [MytvComponent]
})
export class MytvModule { }
