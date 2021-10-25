import { TestBed } from '@angular/core/testing';

import { SampletypeService } from './sampletype.service';

describe('SampletypeService', () => {
  let service: SampletypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampletypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
