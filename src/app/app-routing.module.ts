
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddComponent} from "./student/add/add.component";
import {ListComponent1} from "./student/list/list.component1";
import {ListComponent2} from "./student/list/list.component2";
import {EditComponent} from "./student/edit/edit.component";

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent1 },
  { path: 'list2', component: ListComponent2 },
  { path: 'edit', component: EditComponent },
  {path : '', component : ListComponent1}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
