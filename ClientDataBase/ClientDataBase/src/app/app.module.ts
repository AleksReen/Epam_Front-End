import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { ClientBaseComponent } from './client-base/client-base.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,  
    ClientBaseComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
