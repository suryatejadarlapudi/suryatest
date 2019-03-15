import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPage2Component } from './otp-page2.component';

describe('OtpPage2Component', () => {
  let component: OtpPage2Component;
  let fixture: ComponentFixture<OtpPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
