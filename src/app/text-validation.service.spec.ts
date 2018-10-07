import { TestBed, inject } from '@angular/core/testing';

import { TextValidationService } from './text-validation.service';

describe('TextValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextValidationService]
    });
  });

  it('should be created', inject([TextValidationService], (service: TextValidationService) => {
    expect(service).toBeTruthy();
  }));
});
