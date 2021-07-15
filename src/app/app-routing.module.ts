
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "./product/add/add.component";
import {ListComponent} from "./product/list/list.component";
import {EditComponent} from "./product/edit/edit.component";

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent },
  {path : '', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
