import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueOperationsComponent } from './historique-operations.component';

describe('HistoriqueOperationsComponent', () => {
  let component: HistoriqueOperationsComponent;
  let fixture: ComponentFixture<HistoriqueOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
