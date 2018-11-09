import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { AboutComponent } from '../about/about.component';
import { MytvComponent } from '../mytv/mytv.component';
import { IndexComponent } from '../index/index.component';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            { path: 'about', component: AboutComponent },
            { path: 'mytv', component: MytvComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
