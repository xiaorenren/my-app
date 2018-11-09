import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsModule' }
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
