import { TestBed } from '@angular/core/testing';

import { ConseillerService } from './conseiller.service';

describe('ConseillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConseillerService = TestBed.get(ConseillerService);
    expect(service).toBeTruthy();
  });
});
