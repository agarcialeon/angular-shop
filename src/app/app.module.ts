import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { CommonModule } from '@angular/common';
import { StatusCartComponent } from './status-cart/status-cart.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioprimeroComponent } from './formularioprimero/formularioprimero.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulariosegundoComponent } from './formulariosegundo/formulariosegundo.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    StatusCartComponent,
    FormularioprimeroComponent,
    ConfirmComponent,
    FormulariosegundoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
