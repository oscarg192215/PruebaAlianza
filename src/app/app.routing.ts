import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ClientsLookHistoryComponent } from './screens/clients-look-history/clients-look-history.component';
import { EmergencyPinConfigurationComponent } from './screens/emergency-pin-configuration/emergency-pin-configuration.component';
import { EmergencyPinHistoryComponent } from './screens/emergency-pin-history/emergency-pin-history.component';
import { ClientsComponent } from './screens/clients/clients.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ClientsLookHistory',
    component: ClientsLookHistoryComponent,
  },
  {
    path: 'Clients',
    component: ClientsComponent,
  },
  {
    path: 'EmergencyPinConfiguration',
    component: EmergencyPinConfigurationComponent,
  },
  {
    path: 'EmergencyPinHistory',
    component: EmergencyPinHistoryComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
