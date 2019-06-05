import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerVirementComponent } from './effectuer-virement.component';

describe('EffectuerVirementComponent', () => {
  let component: EffectuerVirementComponent;
  let fixture: ComponentFixture<EffectuerVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectuerVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
