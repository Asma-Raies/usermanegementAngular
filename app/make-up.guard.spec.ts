import { TestBed } from '@angular/core/testing';

import { MakeUpGuard } from './make-up.guard';

describe('MakeUpGuard', () => {
  let guard: MakeUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MakeUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
