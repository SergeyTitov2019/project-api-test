
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent1 } from './student/list/list.component1';
import { ListComponent2 } from './student/list/list.component2';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent1,
    ListComponent2,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
