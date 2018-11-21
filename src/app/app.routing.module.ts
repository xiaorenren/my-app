import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'play/:id', loadChildren: './play/play.module#PlayModule' },
  { path: 'test', loadChildren: './test/test.module#TestModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
