import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirConseillerComponent } from './voir-conseiller.component';

describe('VoirConseillerComponent', () => {
  let component: VoirConseillerComponent;
  let fixture: ComponentFixture<VoirConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
