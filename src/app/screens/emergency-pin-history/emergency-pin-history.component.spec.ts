import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPinHistoryComponent } from './emergency-pin-history.component';

describe('EmergencyPinHistoryComponent', () => {
  let component: EmergencyPinHistoryComponent;
  let fixture: ComponentFixture<EmergencyPinHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyPinHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyPinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
