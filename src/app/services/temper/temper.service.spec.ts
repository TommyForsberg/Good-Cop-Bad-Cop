import { TestBed, inject } from '@angular/core/testing';

import { TemperService } from './temper.service';

describe('TemperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperService]
    });
  });

  it('should be created', inject([TemperService], (service: TemperService) => {
    expect(service).toBeTruthy();
  }));
});
