import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerClientComponent } from './creer-client.component';

describe('CreerClientComponent', () => {
  let component: CreerClientComponent;
  let fixture: ComponentFixture<CreerClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
