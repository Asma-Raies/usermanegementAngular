import { TestBed } from '@angular/core/testing';

import { MakeUpService } from './make-up.service';

describe('MakeUpService', () => {
  let service: MakeUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
