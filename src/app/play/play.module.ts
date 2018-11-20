import { NgModule } from '@angular/core';
import { PlayComponent } from './play.component';
import { PlayRoutingModule } from './play.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    SharedModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
