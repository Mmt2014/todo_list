import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FillComponent } from './fill/fill.component';
//import { FormComponent } from './form/form.component';
import { FillComponent } from './fill/fill.component';

@NgModule({
  declarations: [
AppComponent,
  FillComponent,
  
    //FillComponent,
        //FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
