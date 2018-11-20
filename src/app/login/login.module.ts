import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    IonicModule,
    NgZorroAntdMobileModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
