
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "./product/add/add.component";
import {ListComponent1} from "./product/list/list.component1";
import {EditComponent} from "./product/edit/edit.component";

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent1 },
  { path: 'edit', component: EditComponent },
  {path : '', component : ListComponent1}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
