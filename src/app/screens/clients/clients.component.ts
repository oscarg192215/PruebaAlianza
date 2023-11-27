import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import * as FileSaver from 'file-saver';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

  clients: Client[] = [];
  displayAddEditModal = false;
  selectedClient: any = null;
  subscriptions: Subscription[] = [];
  pdtSubscription: Subscription = new Subscription();
  refreshSubscription: Subscription = new Subscription();
  cols: any[] = [];
  exportColumns: any[] = [];

  constructor(private clientService: ClientService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getClientList();

    this.refreshSubscription = this.clientService.refresh$.subscribe(() => {
      this.getClientList();
    })

    this.cols = [
      { field: "sharedkey", header: "Shared_Key" },
      { field: "businessid", header: "Name" },
      { field: "email", header: "Email" },
      { field: "phone", header: "Phone" },
      { field: "startdate", header: "Data_Added" }
    ];

    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  getClientList() {
    this.pdtSubscription = this.clientService.getClients().subscribe(
      response => {
        this.clients = response;
      }
    );
    this.subscriptions.push(this.pdtSubscription)
  }

  showAddModal() {
    this.displayAddEditModal = true;
    this.selectedClient = null;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  saveorUpdateClientList(newData: any) {
    if (this.selectedClient && newData.id === this.selectedClient.id) {
      const clientIndex = this.clients.findIndex(data => data.id === newData.id);
      this.clients[clientIndex] = newData;
    } else {
      this.clients.unshift(newData);
    }
    this.getClientList();
  }

  showEditModal(client: Client) {
    this.displayAddEditModal = true;

    let fechaInicio = new Date(client.startdate);
    fechaInicio.setDate(fechaInicio.getDate());

    let fechafin = new Date(client.enddate);
    fechafin.setDate(fechafin.getDate());
    client.startdate = fechaInicio;
    client.enddate = fechafin
    this.selectedClient = client;
  }

  deleteClient(client: Client) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this client?',
      accept: () => {
        this.clientService.deleteClient(client.id).subscribe(
          response => {
            this.clients = this.clients.filter(data => data.id !== client.id);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        )
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.clients);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "clients");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}

