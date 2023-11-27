import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddEditClientsComponent } from './add-edit-clients.component';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardModule } from 'primeng/card';
import {OnlyNumberDirective} from './only-number.directive'

@NgModule({
  declarations: [
    AddEditClientsComponent, OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
    BrowserModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    CardModule
  ],
  exports: [AddEditClientsComponent]
})
export class AddEditClientsModule { }
