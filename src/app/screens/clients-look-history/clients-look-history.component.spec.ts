import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLookHistoryComponent } from './clients-look-history.component';

describe('ClientsLookHistoryComponent', () => {
  let component: ClientsLookHistoryComponent;
  let fixture: ComponentFixture<ClientsLookHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsLookHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsLookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
