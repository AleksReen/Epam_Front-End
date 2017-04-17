import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { DataService } from './data.service';
import { FormComponent } from './form/form.component';

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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
