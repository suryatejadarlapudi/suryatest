import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleselectionComponent } from './roleselection.component';

describe('RoleselectionComponent', () => {
  let component: RoleselectionComponent;
  let fixture: ComponentFixture<RoleselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
