import { TestBed } from '@angular/core/testing';

import { GenerateRandomStringService } from './generate-random-string.service';

describe('GenerateRandomStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateRandomStringService = TestBed.get(GenerateRandomStringService);
    expect(service).toBeTruthy();
  });
});
