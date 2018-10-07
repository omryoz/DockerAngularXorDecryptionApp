import { TextValidationService } from './text-validation.service';
import { Injectable } from '@angular/core';

@Injectable()
export class XorEncryptorService {

  constructor(private textValidationService: TextValidationService) { }

  public xorDecrypt(input, key) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const omry = key.charAt(i % key.length);
      const keyCharToUse = key.charCodeAt(i % key.length);
      // tslint:disable-next-line:no-bitwise
      const decrypted = input[i] ^ keyCharToUse;
      result += String.fromCharCode(decrypted);
    }
    return result;
  }
  private getPossibleKeys(k) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const result = [];
    const n = chars.length;
    this.getPossibleKeysRec(chars, '', n, k, result);
    return result;
  };

  private getPossibleKeysRec(set,
    prefix,
    n, k, result) {

    if (k === 0) {
      result.push(prefix);
      return;
    }
    for (let i = 0; i < n; ++i) {

      const newPrefix = prefix + set[i];
      this.getPossibleKeysRec(set, newPrefix,
        n, k - 1, result);
    }
  };
  public guessKey(encryptedText, keySize) {
    const possibleKeys = this.getPossibleKeys(keySize);
    const result = [];
    possibleKeys.forEach((key) => {
      const decryptedText = this.xorDecrypt(encryptedText, key);
      if (this.textValidationService.validate(decryptedText)) {
        result.push({key: key, possibleDecrypedText: decryptedText});
      }
    });
    return result;
  }
}
