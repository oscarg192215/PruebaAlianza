import { formatDate, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-edit-clients',
  templateUrl: './add-edit-clients.component.html',
  styleUrls: ['./add-edit-clients.component.scss']
})
export class AddEditClientsComponent implements OnInit, OnChanges {

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedClient: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType = "Add";
  startdate: Date= new Date();
  enddate: Date = new Date();
  fechainicio: string | undefined;
  datePipe = new DatePipe('en-US');

  clientForm = this.fb.group({
    sharedkey: ['', [Validators.required]],
    businessid: ['', [Validators.required]],
    email:  ['', [Validators.required]],
    phone:  [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
    startdate: ['', [Validators.required]],
    enddate: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private clientService: ClientService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.selectedClient) {
      this.modalType = 'Edit';
      this.clientForm.patchValue(this.selectedClient);
    } else {
      this.clientForm.reset();
      this.modalType = 'Add';
    }
  }

  closeModal() {
    this.clientForm.reset();
    this.clickClose.emit(true);
    
  }

  addEditClient() {
    this.clientService.addEditClient(this.clientForm.value, this.selectedClient).subscribe(
      response => {
        this.clickAddEdit.emit(response);
        this.closeModal();
        const msg = this.modalType === 'Add' ? 'Client added' : 'Client updated';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: msg });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        console.log('Errror occured');
      }
    )
  }

}
