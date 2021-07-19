
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "./modules/products/components/add/add.component";
import {ListComponent} from "./modules/products/components/list/list.component";
import {EditComponent} from "./modules/products/components/edit/edit.component";
import {TestComponent} from "./modules/products/components/test/test.component";

const routes: Routes = [
  { path: 'add', component: TestComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: TestComponent },
  // { path: 'test', component: TestComponent },
  { path: '', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
