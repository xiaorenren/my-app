import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HelloRoutingModule } from './hello.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgZorroAntdMobileModule,
    HelloRoutingModule
  ],
  declarations: [HelloComponent]
})
export class HelloModule { }
