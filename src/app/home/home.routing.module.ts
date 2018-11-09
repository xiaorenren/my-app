import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home/home.page';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            { path: 'hello', component: HelloComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
