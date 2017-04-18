import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBaseComponent } from './data-base/data-base.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { DataService } from './data.service';
import { FormComponent } from './form/form.component';
=======
>>>>>>> parent of ddb3f9e... load local storage
=======
>>>>>>> parent of ddb3f9e... load local storage
=======
>>>>>>> parent of ddb3f9e... load local storage

@NgModule({
  declarations: [
    AppComponent,
    DataBaseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
