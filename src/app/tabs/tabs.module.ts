import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs.routing.module';
import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomeModule } from './home/home.module';
import { MytvModule } from './mytv/mytv.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgZorroAntdMobileModule,
    HomeModule,
    MytvModule,
    AboutModule,
    TabsRoutingModule
  ],
  declarations: [TabsComponent]
})
export class TabsModule { }
