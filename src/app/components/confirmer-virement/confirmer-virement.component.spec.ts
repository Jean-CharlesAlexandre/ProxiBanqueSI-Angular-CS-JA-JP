import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerVirementComponent } from './confirmer-virement.component';

describe('ConfirmerVirementComponent', () => {
  let component: ConfirmerVirementComponent;
  let fixture: ComponentFixture<ConfirmerVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmerVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmerVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
