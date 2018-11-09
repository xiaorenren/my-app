import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs.routing.module';
import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomePageModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';
import { MytvModule } from '../mytv/mytv.module';
import { IndexModule } from './../index/index.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgZorroAntdMobileModule,
    HomePageModule,
    IndexModule,
    AboutModule,
    MytvModule,
    TabsRoutingModule
  ],
  declarations: [TabsComponent]
})
export class TabsModule { }
