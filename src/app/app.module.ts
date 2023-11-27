import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SidenavLinkComponent } from './components/sidenav-link/sidenav-link.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './screens/home/home.component';
import { ClientsLookHistoryComponent } from './screens/clients-look-history/clients-look-history.component';
import { EmergencyPinConfigurationComponent } from './screens/emergency-pin-configuration/emergency-pin-configuration.component';
import { EmergencyPinHistoryComponent } from './screens/emergency-pin-history/emergency-pin-history.component';
import { ClientsModule } from './screens/clients/clients.module';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SidenavLinkComponent,
    SidenavComponent,
    HomeComponent,
    ClientsLookHistoryComponent,
    EmergencyPinConfigurationComponent,
    EmergencyPinHistoryComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, MatIconModule,
    ClientsModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    ConfirmDialogModule,
    MatTableModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
