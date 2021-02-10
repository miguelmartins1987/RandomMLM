import { TestBed } from '@angular/core/testing';

import { RollDieService } from './roll-die.service';

describe('RollDieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollDieService = TestBed.get(RollDieService);
    expect(service).toBeTruthy();
  });
});
