import { TestBed, inject } from '@angular/core/testing';

import { CoptocopService } from './coptocop.service';

describe('CoptocopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoptocopService]
    });
  });

  it('should be created', inject([CoptocopService], (service: CoptocopService) => {
    expect(service).toBeTruthy();
  }));
});
