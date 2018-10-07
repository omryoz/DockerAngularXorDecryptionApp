import { TestBed, inject } from '@angular/core/testing';

import { XorEncryptorService } from './xor-encryptor.service';

describe('XorEncryptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XorEncryptorService]
    });
  });

  it('should be created', inject([XorEncryptorService], (service: XorEncryptorService) => {
    expect(service).toBeTruthy();
  }));
});
