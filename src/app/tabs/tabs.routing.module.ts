import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
            { path: 'mytv', loadChildren: './mytv/mytv.module#MytvModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
