import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // SharedModule,
    NgZorroAntdMobileModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
