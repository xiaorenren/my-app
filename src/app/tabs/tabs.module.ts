import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs.routing.module';
import { IonicModule } from '@ionic/angular';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomeComponent } from './home/home.component';
import { MytvComponent } from './mytv/mytv.component';
import { AboutComponent } from './about/about.component';
import { LiveComponent } from './live/live.component';
import { VodComponent } from './vod/vod.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    NgZorroAntdMobileModule,
    TabsRoutingModule
  ],
  declarations: [
    TabsComponent,
    HomeComponent,
    MytvComponent,
    AboutComponent,
    LiveComponent,
    VodComponent,
    HeaderComponent
  ]
})
export class TabsModule { }
