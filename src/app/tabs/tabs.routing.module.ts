import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MytvComponent } from './mytv/mytv.component';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
            {
                path: 'home', component: HomeComponent,
                children: [
                    { path: 'hello', loadChildren: './home/hello/hello.module#HelloModule' }
                ]
            },
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
