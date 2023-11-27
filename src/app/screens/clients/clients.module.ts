import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';

import { ClientsComponent } from './clients.component';
import { AddEditClientsModule } from './add-edit-clients/add-edit-clients.module';

import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AddEditClientsModule,
    ToastModule,
    ConfirmDialogModule,
    CardModule,
    CalendarModule
  ],
  exports: [
    ClientsComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class ClientsModule { }
