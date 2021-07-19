
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "./modules/products/components/add/add.component";
import {ListComponent} from "./modules/products/components/list/list.component";
import {EditComponent} from "./modules/products/components/edit/edit.component";

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
  {path : '', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
