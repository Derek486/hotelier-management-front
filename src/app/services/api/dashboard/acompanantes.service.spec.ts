import { TestBed } from '@angular/core/testing';

import { AcompanantesService } from './acompanantes.service';

describe('AcompanantesService', () => {
  let service: AcompanantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompanantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
