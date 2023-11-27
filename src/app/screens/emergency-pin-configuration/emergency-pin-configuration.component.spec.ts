import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPinConfigurationComponent } from './emergency-pin-configuration.component';

describe('EmergencyPinConfigurationComponent', () => {
  let component: EmergencyPinConfigurationComponent;
  let fixture: ComponentFixture<EmergencyPinConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyPinConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyPinConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
