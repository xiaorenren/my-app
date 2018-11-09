import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytvComponent } from './mytv.component';

const routes: Routes = [
    {
        path: '',
        component: MytvComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MytvRoutingModule { }
