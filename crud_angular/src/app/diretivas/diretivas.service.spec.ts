import { TestBed } from '@angular/core/testing';

import { DiretivasService } from './diretivas.service';

describe('DiretivasService', () => {
  let service: DiretivasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
